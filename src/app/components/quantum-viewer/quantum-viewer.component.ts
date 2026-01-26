import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-quantum-viewer',
  standalone: true,
  templateUrl: './quantum-viewer.component.html',
  styleUrls: ['./quantum-viewer.component.scss']
})
export class QuantumViewerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('quantumCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationId: number = 0;

  private points: Point3D[] = [];
  private goldenRoutes: Route[] = [];
  private globeRadius = 180;

  private width = 0;
  private height = 0;
  private centerX = 0;
  private centerY = 0;

  private angleX = 0.3;
  private angleY = 0;
  private autoRotateSpeed = 0.002;

  private isDragging = false;
  private lastMouseX = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initCanvas();
      this.loadMapData('/images/world-map.png');
    }
  }

  ngOnDestroy(): void {
    if (this.animationId) cancelAnimationFrame(this.animationId);
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    this.isDragging = true;
    this.lastMouseX = e.clientX;
  }

  @HostListener('window:mouseup')
  onMouseUp() { this.isDragging = false; }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.isDragging) {
      const deltaX = e.clientX - this.lastMouseX;
      this.angleY += deltaX * 0.005;
      this.lastMouseX = e.clientX;
    }
  }

  initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const container = this.containerRef.nativeElement;
    this.width = container.offsetWidth;
    this.height = container.offsetHeight;
    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext('2d')!;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
  }

  loadMapData(src: string) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const hiddenCanvas = document.createElement('canvas');
      const hiddenCtx = hiddenCanvas.getContext('2d')!;

      const w = 360;
      const h = 180;

      hiddenCanvas.width = w;
      hiddenCanvas.height = h;
      hiddenCtx.drawImage(img, 0, 0, w, h);

      const imageData = hiddenCtx.getImageData(0, 0, w, h);
      this.processMapPoints(imageData, w, h);
      this.generateGoldenRoutes();
      this.animate();
    };
  }

  processMapPoints(data: ImageData, w: number, h: number) {
    this.points = [];

    for (let y = 0; y < h; y += 2) {
      for (let x = 0; x < w; x += 2) {

        const index = (y * w + x) * 4;
        const r = data.data[index];
        const g = data.data[index+1];
        const b = data.data[index+2];
        const alpha = data.data[index+3];

        const isNotWhite = (r + g + b) / 3 < 240;
        const isVisible = alpha > 50;

        if (isNotWhite && isVisible) {
          const lat = (y / h) * Math.PI - Math.PI / 2;
          const lon = (x / w) * 2 * Math.PI - Math.PI;

          const px = this.globeRadius * Math.cos(lat) * Math.cos(lon);
          const py = this.globeRadius * Math.sin(lat);
          const pz = this.globeRadius * Math.cos(lat) * Math.sin(lon);


          if (Math.random() > 0.2) {
            const isHub = Math.random() > 0.985;
            this.points.push({ x: px, y: py, z: pz, isHub });
          }
        }
      }
    }
  }

  generateGoldenRoutes() {
    this.goldenRoutes = [];
    const hubs = this.points.filter(p => p.isHub);

    for (let i = 0; i < 12; i++) {
        const start = hubs[Math.floor(Math.random() * hubs.length)];
        const end = hubs[Math.floor(Math.random() * hubs.length)];

        if (start && end && start !== end) {
             this.goldenRoutes.push({ p1: start, p2: end });
        }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    if (!this.isDragging) this.angleY += this.autoRotateSpeed;

    const cosX = Math.cos(this.angleX);
    const sinX = Math.sin(this.angleX);
    const cosY = Math.cos(this.angleY);
    const sinY = Math.sin(this.angleY);

    const projectedPoints: any[] = [];

    this.points.forEach(p => {
      let x1 = p.x * cosY - p.z * sinY;
      let z1 = p.z * cosY + p.x * sinY;
      let y2 = p.y * cosX - z1 * sinX;
      let z2 = z1 * cosX + p.y * sinX;

      const scale = 450 / (450 + z2);
      const x2d = x1 * scale + this.centerX;
      const y2d = y2 * scale + this.centerY;

      projectedPoints.push({ x: x2d, y: y2d, z: z2, scale, isHub: p.isHub, originalRef: p });
    });

    // 2. DIBUJAR RUTAS (ARCOS)
    this.ctx.lineWidth = 1.5;
    this.goldenRoutes.forEach(route => {
      const start = projectedPoints.find(pp => pp.originalRef === route.p1);
      const end = projectedPoints.find(pp => pp.originalRef === route.p2);

      if (start && end) {
        if (start.z < 50 && end.z < 50) {
          const alpha = Math.min(1, Math.max(0.1, (start.scale + end.scale)/2 - 0.4));
          this.ctx.strokeStyle = `rgba(190, 159, 86, ${alpha})`;
          this.ctx.beginPath();
          this.ctx.moveTo(start.x, start.y);

          const midX = (start.x + end.x) / 2;
          const midY = (start.y + end.y) / 2;
          const lift = 80 * start.scale;
          const cpY = midY - lift;

          this.ctx.quadraticCurveTo(midX, cpY, end.x, end.y);
          this.ctx.stroke();
        }
      }
    });

    // 3. DIBUJAR PUNTOS
    for (let p of projectedPoints) {

      if (p.z < 20) {
        const alpha = Math.max(0.2, p.scale - 0.4);

        if (p.isHub) {
          this.ctx.fillStyle = `rgba(190, 159, 86, ${alpha + 0.2})`;
          this.ctx.shadowBlur = 8;
          this.ctx.shadowColor = '#BE9F56';
        } else {
          this.ctx.fillStyle = `rgba(0, 181, 226, ${alpha})`;
          this.ctx.shadowBlur = 0;
        }

        const radius = p.isHub ? 2.5 : 1.2;

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, radius * p.scale, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
    }

    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }
}

interface Point3D {
  x: number; y: number; z: number;
  isHub?: boolean;
}

interface Route {
  p1: Point3D;
  p2: Point3D;
}
