import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  langService = inject(LanguageService);

  slides = [
    {
      src: '/images/puebla5.jpg',
      titleKey: 'gal_1_t',
      descKey: 'gal_1_d'
    },
    {
      src: '/images/puebla2.jpg',
      titleKey: 'gal_2_t',
      descKey: 'gal_2_d'
    },
    {
      src: '/images/puebla3.jpg',
      titleKey: 'gal_3_t',
      descKey: 'gal_3_d'
    },
    {
      src: '/images/puebla4.jpg',
      titleKey: 'gal_4_t',
      descKey: 'gal_4_d'
    },

  ];

  currentIndex = 0;
  interval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  next() {
    this.stopAutoPlay();
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.startAutoPlay();
  }

  prev() {
    this.stopAutoPlay();
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.startAutoPlay();
  }

  goToSlide(index: number) {
    this.stopAutoPlay();
    this.currentIndex = index;
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  }

  stopAutoPlay() {
    if (this.interval) clearInterval(this.interval);
  }
}
