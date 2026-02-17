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
  
  imagenBoris='https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/4f138356ac670cf902ede4c48fe437a955681b92/Boris.png';
  imagenJimena='https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/11879a0b107010a664d4f50cb816d189def0c434/Jimena.png';
  imagenMariaIsabel = 'https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/f1c28148da0345abe2da410f8fe09dc7b32a181a/MariaIsabelPedrazaMorales.png';
  imagenOliviaMaricela= 'https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/4096f9d7093f5594e7f35c4cdd968fa6d0012b65/OliviaMaricelat.png';
  imagenRicardoTovar= 'https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/1eed4d63feddd05b8ca6cc70a66cecc7c702463a/VillegasTovar.jpg';
  imagenArturoFernandez= 'https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/2dddc0464894f982dff650b19e4d76ab1c62df0a/ArturoFernandez1.jpeg';
  imagenEnriqueMorales='https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/09a6cb86905593291a96d4de749cecc567856e37/EnriqueMorales1.jpg';
  imagenSalvador='https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/0f5252cb557b59471dcf3643aeb26653b2fa5025/SalvadorElias.jpg?raw=true';
  imagenJorgeChriste='https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/2af759a4caa4ef56e85412bc58772c8d54823250/JorgeChristen.jpg';
  imagenKarina='https://github.com/QuikeStifler/PaginaHackathon2026/blob/3015dc7d957b8a11fb1f1aefe667e59013d876ce/Karina.jpeg?raw=true';
  imagenDavidPinto='https://github.com/QuikeStifler/PaginaHackathon2026/blob/3015dc7d957b8a11fb1f1aefe667e59013d876ce/davidpinto1.jpg?raw=true';
  imagenFrancisco='https://raw.githubusercontent.com/QuikeStifler/PaginaHackathon2026/644606a881363d2923205dc45f7378d9a7e2e08c/francisco.jpg';

  speakersList: PersonCard[] = [
    {
      name: 'Dra. Isabel Pedraza Morales',
      role: 'Profesor Investigador - CIIEC',
      company: 'VIEP-BUAP',
      image: this.imagenMariaIsabel,
      bioKey: 'bio_isabel'
    },
    { name: 'Dr. Arturo Fernández Téllez', role: 'ALICE-CERN / FCFM', company: 'BUAP', image: this.imagenArturoFernandez,
      bioKey: 'bio_arturo'
    },
    { name: 'Dr. Ricardo Villegas Tovar', role: 'Director del Centro de Educación Internacional', company: 'BUAP', image: this.imagenRicardoTovar, bioKey: 'bio_ricardo'},
    { name: 'Dr. David Pinto Avendaño', role: 'Director de Innovación y Transferencia', company: 'BUAP', image: this.imagenDavidPinto,
      bioKey: 'bio_david'
    },
    { name: 'M.I. Enrique Morales Aguilar', role: 'Facultad de Ciencias de la Computación / Facultad de Ciencias de la Electrónica', company: 'BUAP', image: this.imagenEnriqueMorales,
      bioKey: 'bio_enrique'
    },
    { name: 'Dra. Jimena Olveres Montiel', role: 'Facultad de Ingeniería', company: 'UNAM', image: this.imagenJimena,
      bioKey: 'bio_jimena'
    },
    { name: 'Dr. Boris Escalante Ramírez', role: 'Facultad de Ingeniería', company: 'UNAM', image: this.imagenBoris,
      bioKey: 'bio_boris'
    },
    { name: 'Dra. Karina Garay Palmett', role: 'Departamento de Óptica', company: 'CICESE', image: this.imagenKarina, bioKey: 'bio_karina'},
    { name: 'Dr.Francisco Domínguez', role: 'Departamento de Óptica', company: 'CICESE', image: this.imagenFrancisco,
      bioKey: 'bio_francisco'
     },
    { name: 'Dra. Olivia Maricela Barrón Cano', role: 'Directora del Departamento de Computación e Ingeniería Industrial', company: 'Universidad de Monterrey', image: this.imagenOliviaMaricela,
      bioKey: 'bio_olivia'
    },
    { name: 'M. I. José Jorge Christen Gracia', role: 'Depto. Computación e Ingeniería', company: 'Universidad de Monterrey', image: this.imagenJorgeChriste,
      bioKey: 'bio_christen'
    },
    { name: 'Dr. Salvador E. Venegas-Andraca', role: 'Professor of Computer Science', company: 'Tecnológico de Monterrey', image: this.imagenSalvador,
      bioKey: 'bio_salvador'
    }
  ];

  //Ponentes
  mentorsList: PersonCard[] = [
    { name: 'Diana Franklin', role: 'Speaker', company: 'University of Chicago', image: this.defaultImage },
    { name: 'Guohua Sun', role: 'Speaker', company: 'IPN - CIC', image: this.defaultImage },
    { name: 'Pablo Barberis', role: 'Speaker', company: 'UNAM - IIMAS', image: this.defaultImage },
    { name: 'Alexandra de Castro', role: 'Speaker', company: 'Quandela', image: this.defaultImage },
    { name: 'Camile Coti', role: 'Speaker', company: 'ETS - Montreal', image: this.defaultImage },
    { name: 'Sergio Boixo', role: 'Speaker', company: 'Google', image: this.defaultImage },
    { name: 'Gregory Shutko', role: 'Speaker', company: 'QCentroid', image: this.defaultImage },
    { name: 'Claudia Zendejas Morales', role: 'Speaker', company: 'UNAM', image: this.defaultImage }
  ];

  mentorsAndJudgesList: PersonCard[] = [
    // { name: 'Miguel de Jesús Gónzalez Martínez', role: 'Mentor', company: 'Facultad de Ciencias - UNAM', image: this.defaultImage },
    // { name: 'Claudia Zendejas Morales', role: 'Mentor', company: 'Facultad de Ciencias - UNAM', image: this.defaultImage },
    // { name: 'Adair Campos Uscanga', role: 'Mentor', company: 'UAM Iztapalapa', image: this.defaultImage },
    // { name: 'Naomi Itzel Reyes Granados', role: 'Mentor', company: 'Facultad de Ingeniería - UNAM', image: this.defaultImage },
    // { name: 'Jorge Luis Apatiga Sánchez', role: 'Mentor', company: 'Facultad de Ciencias - UNAM', image: this.defaultImage },
    // { name: 'Dra. Jimena Olveres Montiel', role: 'Juez', company: 'UNAM', image: this.defaultImage },
    // { name: 'Dr. Boris Escalante Ramírez', role: 'Juez', company: 'UNAM', image: this.defaultImage },
    // { name: 'M.I. José Jorge Christen Gracia', role: 'Depto. Computación e Ingeniería', company: 'UDEM', image: this.imagenJorgeChriste,
    //   bioKey: 'bio_christen'
    // },
  ];
}