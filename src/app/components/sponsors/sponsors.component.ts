import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  langService = inject(LanguageService);

  // GRUPO 1: ORGANIZADORES
  organizers = [
    { name: 'Open Quantum Institute', img: '/images/oqi.png', url: 'https://open-quantum-institute.cern/' },
    { name: 'BUAP', img: '/images/buap.png', url: 'https://www.buap.mx/' },
    { name: 'TEC', img: '/images/tec_mont.png', url: 'https://tec.mx/es' },
    { name: 'UNAM', img: '/images/UNAM.png', url: 'https://www.unam.mx/' },
    { name: 'UDEM', img: '/images/UANL.png', url: 'https://www.udem.mx/' },
    {name: 'CICESE', img: '/images/cicese.png', url: 'https://www.cicese.edu.mx/' },
  ];

  // GRUPO 2: PATROCINADORES
  sponsors = [
    { name: 'Secretaría de Ciencia', img: '/images/gob.jpg', url: 'https://concytep.puebla.gob.mx/' },
    {

  name: 'qcentroid',

  img: '/images/qcentroid.png',

  url: 'https://qcentroid.xyz/',

  large: true

},
    { name: 'Gobierno de Puebla', img: '/images/logo-puebla.png', url: 'https://www.puebla.gob.mx/' },
    { name: 'UNESCO', img: '/images/unesco.png', url: 'https://www.unesco.org/' },
    { name: 'IANNQCD', img: '/images/IANNQCD.jpeg', url: 'https://www.iann-qcd.org/' },
  ];
}
