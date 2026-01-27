import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

type PersonCard = {
  name: string;
  role: string;
  company: string;
  image: string;
  bioKey?: string;
};

@Component({
  selector: 'app-mentors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent {
  langService = inject(LanguageService);
 
  defaultImage =
    'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg';
  
  imagenMariaIsabel = 'https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/f1c28148da0345abe2da410f8fe09dc7b32a181a/MariaIsabelPedrazaMorales.png';
  imagenOliviaMaricela= 'https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/4096f9d7093f5594e7f35c4cdd968fa6d0012b65/OliviaMaricelat.png';
  imagenRicardoTovar= 'https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/1eed4d63feddd05b8ca6cc70a66cecc7c702463a/VillegasTovar.jpg';
  imagenArturoFernandez= 'https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/2dddc0464894f982dff650b19e4d76ab1c62df0a/ArturoFernandez1.jpeg';
  imagenEnriqueMorales='https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/9186668362c3c191a26875b1225aefeec2a1dc47/EnriqueMorales.jpg';
  imagenSalvador='https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/0f5252cb557b59471dcf3643aeb26653b2fa5025/SalvadorElias.jpg?raw=true';


  speakersList: PersonCard[] = [
    {
      name: 'Isabel Pedraza Morales',
      role: 'Profesor Investigador - CIIEC',
      company: 'VIEP-BUAP',
      image: this.imagenMariaIsabel
    },
    { name: 'Dr. Arturo Fernández Téllez', role: 'ALICE-CERN / Director General de la Divulgación Científica', company: 'BUAP', image: this.imagenArturoFernandez },
    { name: 'Dr. Ricardo Villegas Tovar', role: 'Director del Centro de Educación Internacional', company: 'BUAP', image: this.imagenRicardoTovar},
    { name: 'Dr. David Pinto Avendaño', role: 'Director de Innovación y Transferencia', company: 'BUAP', image: this.defaultImage },
    { name: 'M.I. Enrique Morales Aguilar', role: 'Facultad de Ciencias de la Computació/Facultad de Ciencias de la Electrónica', company: 'BUAP', image: this.imagenEnriqueMorales },
    { name: 'Jimena Olveres Montiel', role: 'Centro de Estudios en Computación Avanzada', company: 'UNAM', image: this.defaultImage },
    { name: 'Boris Escalante Ramírez', role: 'Facultad de Ingeniería', company: 'UNAM', image: this.defaultImage },
    { name: 'Karina Garay Palmett', role: 'Departamento de Óptica', company: 'CICESE', image: this.defaultImage },
    { name: 'Francisco Domínguez', role: 'Departamento de Óptica', company: 'CICESE', image: this.defaultImage },
    { name: 'Olivia Maricela Barrón Cano', role: 'Directora del Departamento de Computación e Ingeniería Industrial', company: 'Universidad de Monterrey', image: this.imagenOliviaMaricela},
    { name: 'J. Jorge Christen Gracia', role: 'Depto. Computación e Ingeniería', company: 'UDEM', image: this.defaultImage,
      bioKey: 'bio_christen'
    },
    { name: 'Salvador E. Venegas-Andraca', role: 'Departamento Regional de Computación CDMX', company: 'Escuela de Ingeniería y Ciencias - Tecnológico de Monterrey', image: this.imagenSalvador }
  ];


  mentorsList: PersonCard[] = [
    { name: 'Tian Zhong', role: 'Speaker', company: 'University of Chicago', image: this.defaultImage },
    { name: 'Diana Franklin', role: 'Speaker', company: 'University of Chicago', image: this.defaultImage },
    { name: 'Guohua Sun', role: 'Speaker', company: 'IPN - CIC', image: this.defaultImage },
    { name: 'Pablo Barberis', role: 'Speaker', company: 'UNAM - IIMAS', image: this.defaultImage },
    { name: 'Francisco Valdés Souto', role: 'Speaker', company: 'UNAM - F. Ciencias', image: this.defaultImage },
    { name: 'Janeth de Anda Gil', role: 'Speaker', company: 'IPN - CIC', image: this.defaultImage },
    { name: 'Alexandra de Castro', role: 'Speaker', company: 'Quandela', image: this.defaultImage },
    { name: 'Camile Coti', role: 'Speaker', company: 'ETS - Montreal', image: this.defaultImage },
    { name: 'Areli Yesareth Guerrero', role: 'Speaker', company: 'IPN - CIC', image: this.defaultImage },
    { name: 'Sergio Boixo', role: 'Speaker', company: 'Google', image: this.defaultImage },
    { name: 'Gregory Shutko', role: 'Speaker', company: 'QCentroid', image: this.defaultImage }
  ];

  mentorsAndJudgesList: PersonCard[] = [
    { name: 'Miguel de Jesús Gónzalez Martínez', role: 'Mentor', company: 'Facultad de Ciencias - UNAM', image: this.defaultImage },
    { name: 'Claudia Zendejas Morales', role: 'Mentor', company: 'Facultad de Ciencias - UNAM', image: this.defaultImage },
    { name: 'Adair Campos Uscanga', role: 'Mentor', company: 'UAM Iztapalapa', image: this.defaultImage },
    { name: 'Naomi Itzel Reyes Granados', role: 'Mentor', company: 'Facultad de Ingeniería - UNAM', image: this.defaultImage },
    { name: 'Jorge Luis Apatiga Sánchez', role: 'Mentor', company: 'Facultad de Ciencias - UNAM', image: this.defaultImage },
    { name: 'Jimena Olveres Montiel', role: 'Juez', company: 'UNAM', image: this.defaultImage },
    { name: 'Boris Escalante Ramírez', role: 'Juez', company: 'UNAM', image: this.defaultImage },
    { name: 'Jorge Christen Gracia', role: 'Juez', company: 'UDEM', image: this.defaultImage }
  ];
}