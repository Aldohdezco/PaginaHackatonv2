import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { QuantumViewerComponent } from '../quantum-viewer/quantum-viewer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, QuantumViewerComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  langService = inject(LanguageService);
}
