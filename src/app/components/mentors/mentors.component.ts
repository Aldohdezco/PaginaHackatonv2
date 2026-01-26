import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

type PersonCard = {
  name: string;
  role: string;
  company: string;
  image: string;
  bio?: string;
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

  speakersList: PersonCard[] = [
    {
      name: 'Isabel Pedraza Morales',
      role: 'Profesor Investigador - CIIEC',
      company: 'VIEP-BUAP',
      image: 'public/images/Test.jpg'
    },
    { name: 'Arturo Fernández Téllez', role: 'ALICE-CERN / Dir. Gral. Div. Científica', company: 'BUAP', image: this.defaultImage },
    { name: 'Dr. Ricardo Villegas Tovar', role: 'Dir. Centro de Educación Internacional', company: 'BUAP', image: this.defaultImage },
    { name: 'David Pinto Avendaño', role: 'Dir. de Innovación y Transferencia', company: 'BUAP', image: this.defaultImage },
    { name: 'Enrique Morales Aguilar', role: 'Facultad de Ciencias de la Electrónica', company: 'BUAP', image: this.defaultImage },
    { name: 'Jimena Olveres Montiel', role: 'Centro de Estudios en Computación Avanzada', company: 'UNAM', image: this.defaultImage },
    { name: 'Boris Escalante Ramírez', role: 'Facultad de Ingeniería', company: 'UNAM', image: this.defaultImage },
    { name: 'Karina Garay Palmett', role: 'Departamento de Óptica', company: 'CICESE', image: this.defaultImage },
    { name: 'Francisco Domínguez', role: 'Departamento de Óptica', company: 'CICESE', image: this.defaultImage },
    { name: 'Olivia Maricela Barrón Cano', role: 'Directora del Departamento de Computación e Ingeniería Industrial', company: 'Universidad de Monterrey', image: this.defaultImage },
    { name: 'J. Jorge Christen Gracia', role: 'Depto. Computación e Ingeniería', company: 'UDEM', image: this.defaultImage,
      bio: `J. Jorge Christen es Ingeniero en Computación Cum Laude por la UNAM, con Maestría en Ingeniería Electrónica por el Instituto Internacional de Eindhoven y estudios en Negocios Internacionales por el ITAM. Cuenta con más de 40 años de experiencia en la industria tecnológica y más de 38 años en docencia de posgrado. Es especialista en Computación Cuántica certificado por el MIT, creador de la metodología ENSAR y del IQC-Kit, y actualmente se dedica a la consultoría y enseñanza en Computación Cuántica e Inteligencia Artificial.`
    },
    { name: 'Salvador E. Venegas', role: 'Investigador', company: 'Tecnológico de Monterrey', image: this.defaultImage }
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