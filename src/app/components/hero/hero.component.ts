import {
  Component, OnInit, OnDestroy, AfterViewInit,
  Inject, PLATFORM_ID, inject, ViewChild, ElementRef, HostListener
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  langService = inject(LanguageService);

  @ViewChild('heroCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId: number = 0;

  private particles: Point[] = [];
  private numParticles = 1200;
  private baseRadius = 280;

  private width = 0;
  private height = 0;
  private centerX = 0;
  private centerY = 0;

  private tick = 0;
  private mouseX = 0;
  private mouseY = 0;
  private targetMouseX = 0;
  private targetMouseY = 0;

  targetDate: number = new Date('June 28, 2026 09:00:00').getTime();
  days: string = '00'; hours: string = '00'; minutes: string = '00'; seconds: string = '00';
  interval: any;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) this.startTimer();
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initCanvas();
      this.animate();
    }
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
    if (this.isBrowser && this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) this.initCanvas();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.isBrowser) {
      this.targetMouseX = (e.clientX - this.width / 2) * 0.001;
      this.targetMouseY = (e.clientY - this.height / 2) * 0.001;
    }
  }

  initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;

    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext('2d')!;

    if (this.width < 768) this.baseRadius = 140;
    else this.baseRadius = 260;

    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      const theta = Math.acos( -1 + ( 2 * i ) / this.numParticles );
      const phi = Math.sqrt( this.numParticles * Math.PI ) * theta;

      this.particles.push(new Point(theta, phi));
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);


    this.tick += 0.0008;

    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;


    const rotX = this.tick * 0.5 + this.mouseY * 2;
    const rotY = this.tick * 0.3 + this.mouseX * 2;

    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);

    for (let p of this.particles) {
      const noise = Math.sin(p.theta * 5 + this.tick * 3) * Math.cos(p.phi * 4 + this.tick * 3);

      const currentRadius = this.baseRadius + (noise * 80);

      let x = currentRadius * Math.sin(p.theta) * Math.cos(p.phi);
      let y = currentRadius * Math.sin(p.theta) * Math.sin(p.phi);
      let z = currentRadius * Math.cos(p.theta);

      let x1 = x * cosY - z * sinY;
      let z1 = z * cosY + x * sinY;
      let y2 = y * cosX - z1 * sinX;
      let z2 = z1 * cosX + y * sinX;


      const parallaxX = this.centerX + (this.mouseX * 100);
      const parallaxY = this.centerY + (this.mouseY * 100);

      const scale = 400 / (400 + z2);
      const x2d = x1 * scale + parallaxX;
      const y2d = y2 * scale + parallaxY;

      if (scale > 0) {
        const alpha = Math.max(0.1, scale - 0.3);

        this.ctx.fillStyle = (p.theta % 0.5 < 0.2) ? '#00c3ffff' : '#FFFFFF';
        this.ctx.globalAlpha = alpha;

        this.ctx.beginPath();
        this.ctx.arc(x2d, y2d, scale * 1.2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
      }
    }

    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  startTimer() {
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate - now;
      if (distance < 0) { clearInterval(this.interval); }
      else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        this.days = d < 10 ? '0' + d : d.toString();
        this.hours = h < 10 ? '0' + h : h.toString();
        this.minutes = m < 10 ? '0' + m : m.toString();
        this.seconds = s < 10 ? '0' + s : s.toString();
      }
    }, 1000);
  }

  scrollToTimeline() {
    if (this.isBrowser) document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  }
}

class Point {
  constructor(public theta: number, public phi: number) {}
}
