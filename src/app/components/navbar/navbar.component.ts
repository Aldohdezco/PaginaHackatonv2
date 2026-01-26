import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  langService = inject(LanguageService);
  isScrolled = false;
  isMenuOpen = false; // <--- NUEVA VARIABLE

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Función para abrir/cerrar
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Función para cerrar cuando das clic en un link
  closeMenu() {
    this.isMenuOpen = false;
  }
}
