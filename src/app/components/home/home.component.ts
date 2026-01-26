import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { MentorsComponent } from '../mentors/mentors.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    GalleryComponent,
    TimelineComponent,
    MentorsComponent,
    SponsorsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
