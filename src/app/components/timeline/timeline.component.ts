import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

type ScheduleEvent = {
  time: string;
  activity: string;
  place: string;
};

type ScheduleDay = {
  label: string;
  date: string;
  featured?: boolean;
  events: ScheduleEvent[];
};

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  langService = inject(LanguageService);

  private readonly schedules: Record<'es' | 'en', ScheduleDay[]> = {
    es: [
      {
        label: 'Día 1',
        date: '29 de junio',
        events: [
          { time: '08:30 – 09:00', activity: 'Transporte en autobús', place: 'One Hotel' },
          { time: '09:00 – 10:00', activity: 'Sesión inaugural', place: 'Aula Virtual' },
          { time: '10:00 – 11:00', activity: 'Descripción del reto', place: 'Aula Virtual' },
          { time: '11:00 – 11:15', activity: 'Descanso', place: '' },
          { time: '11:15 – 11:30', activity: 'Distribución de equipos', place: 'Edificio DitCo' },
          { time: '11:30 – 13:00', activity: 'Hackathon', place: 'Edificio DitCo' },
          { time: '13:00 – 14:30', activity: 'Comida', place: 'Centro de Convenciones' },
          { time: '14:30 – 19:00', activity: 'Hackathon', place: 'Edificio DitCo' },
          { time: '19:00 – 20:30', activity: 'Cena', place: 'Centro de Convenciones' }
        ]
      },
      {
        label: 'Día 2',
        date: '30 de junio',
        featured: true,
        events: [
          { time: '08:30 – 09:00', activity: 'Transporte en autobús', place: 'One Hotel' },
          { time: '09:00 – 13:00', activity: 'Hackathon', place: 'Edificio DitCo' },
          { time: '13:00 – 14:30', activity: 'Comida', place: 'Centro de Convenciones' },
          { time: '14:30 – 19:00', activity: 'Hackathon', place: 'Edificio DitCo' },
          { time: '19:00 – 20:30', activity: 'Cena', place: 'Centro de Convenciones' }
        ]
      },
      {
        label: 'Día 3',
        date: '1 de julio',
        events: [
          { time: '08:30 – 09:00', activity: 'Transporte en autobús', place: 'One Hotel' },
          { time: '09:00 – 12:00', activity: 'Hackathon', place: 'Edificio DitCo' },
          { time: '12:00 – 15:30', activity: 'Presentaciones de equipos', place: 'Aula Virtual' },
          { time: '15:30 – 16:00', activity: 'Anuncio de ganadores', place: 'Aula Virtual' }
        ]
      }
    ],
    en: [
      {
        label: 'Day 1',
        date: 'June 29th',
        events: [
          { time: '08:30 – 09:00', activity: 'Bus transportation', place: 'One Hotel' },
          { time: '09:00 – 10:00', activity: 'Inaugural Session', place: 'Aula Virtual' },
          { time: '10:00 – 11:00', activity: 'Challenge description', place: 'Aula Virtual' },
          { time: '11:00 – 11:15', activity: 'Break', place: '' },
          { time: '11:15 – 11:30', activity: 'Teams distribution', place: 'DitCo Building' },
          { time: '11:30 – 13:00', activity: 'Hackathon', place: 'DitCo Building' },
          { time: '13:00 – 14:30', activity: 'Lunch', place: 'Conv. Center' },
          { time: '14:30 – 19:00', activity: 'Hackathon', place: 'DitCo Building' },
          { time: '19:00 – 20:30', activity: 'Dinner', place: 'Conv. Center' }
        ]
      },
      {
        label: 'Day 2',
        date: 'June 30th',
        featured: true,
        events: [
          { time: '08:30 – 09:00', activity: 'Bus transportation', place: 'One Hotel' },
          { time: '09:00 – 13:00', activity: 'Hackathon', place: 'DitCo Building' },
          { time: '13:00 – 14:30', activity: 'Lunch', place: 'Conv. Center' },
          { time: '14:30 – 19:00', activity: 'Hackathon', place: 'DitCo Building' },
          { time: '19:00 – 20:30', activity: 'Dinner', place: 'Conv. Center' }
        ]
      },
      {
        label: 'Day 3',
        date: 'July 1st',
        events: [
          { time: '08:30 – 09:00', activity: 'Bus transportation', place: 'One Hotel' },
          { time: '09:00 – 12:00', activity: 'Hackathon', place: 'DitCo Building' },
          { time: '12:00 – 15:30', activity: 'Team presentations', place: 'Aula Virtual' },
          { time: '15:30 – 16:00', activity: 'Winners Announcement', place: 'Aula Virtual' }
        ]
      }
    ]
  };

  get schedule(): ScheduleDay[] {
    return this.schedules[this.langService.currentLang()];
  }
}
