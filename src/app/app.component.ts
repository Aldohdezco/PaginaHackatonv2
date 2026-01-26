import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { QuantumViewerComponent } from './components/quantum-viewer/quantum-viewer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    TimelineComponent,
    SponsorsComponent,
    FooterComponent,
    GalleryComponent,
    MentorsComponent,
    QuantumViewerComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hackathon-latam-2026';
}
