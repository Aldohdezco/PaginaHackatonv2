import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {
  langService = inject(LanguageService);
}
