import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

type CourseCalendarEvent = {
  date: number;
  month: 'may' | 'june';
  title: string;
  details?: string;
};

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  constructor(public lang: LanguageService) {}

  private monthOrder: Array<'may' | 'june'> = ['may', 'june'];
  currentMonthIndex = 0;

  calendarWeekDays: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  mayCalendarDays: (number | null)[] = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  juneCalendarDays: (number | null)[] = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30
  ];

  courseEvents: CourseCalendarEvent[] = [
    { date: 14, month: 'may', title: 'Introduction to the pre-hackathon training programme' },
    { date: 15, month: 'may', title: 'Introduction to Quantum Computing' },
    { date: 16, month: 'may', title: 'Introduction to Classical Systems' },
    { date: 17, month: 'may', title: 'Introduction to Quantum Systems' },
    { date: 18, month: 'may', title: 'Quantum Operations & Qiskit Programming' },
    { date: 19, month: 'may', title: 'Grover’s Algorithm' },
    { date: 20, month: 'may', title: 'Grover’s Algorithm for Max-Cut Problem' },
    { date: 21, month: 'may', title: 'Variational Algorithms & Adiabatic Quantum Computation' },
    { date: 22, month: 'may', title: 'Quantum Approximate Optimization Algorithms (QAOA)' },
    { date: 23, month: 'may', title: 'QUBO and Ising Formulations' },
    { date: 24, month: 'may', title: 'Binary Quadratic Model' },
    { date: 27, month: 'may', title: 'Introduction to responsible quantum computing' },
    {
      date: 28,
      month: 'may',
      title: 'Pitching',
      details: 'A workshop led by QAI Ventures introducing core skills for effective final project pitching.'
    },
    {
      date: 29,
      month: 'may',
      title: 'Pitching',
      details: 'A workshop led by QAI Ventures introducing core skills for effective final project pitching.'
    },
    {
      date: 4,
      month: 'june',
      title: 'QC applications for SDGs',
      details: 'Two-hour workshop on translating SDG challenges into quantum use cases and evaluating impact with OQI tools.'
    },
    {
      date: 5,
      month: 'june',
      title: 'QC applications for SDGs',
      details: 'Two-hour workshop on translating SDG challenges into quantum use cases and evaluating impact with OQI tools.'
    }
  ];

  get activeMonth(): 'may' | 'june' {
    return this.monthOrder[this.currentMonthIndex];
  }

  get currentMonthTitle(): string {
    return this.activeMonth === 'may' ? 'Mayo 2026' : 'Junio 2026';
  }

  get currentCalendarDays(): (number | null)[] {
    return this.activeMonth === 'may' ? this.mayCalendarDays : this.juneCalendarDays;
  }

  previousMonth(): void {
    this.currentMonthIndex = this.currentMonthIndex === 0
      ? this.monthOrder.length - 1
      : this.currentMonthIndex - 1;
  }

  nextMonth(): void {
    this.currentMonthIndex = (this.currentMonthIndex + 1) % this.monthOrder.length;
  }

  getEventByDate(date: number | null, month: 'may' | 'june' = this.activeMonth): CourseCalendarEvent | undefined {
    if (!date) {
      return undefined;
    }
    return this.courseEvents.find((event) => event.date === date && event.month === month);
  }

  hasEvent(date: number | null, month: 'may' | 'june' = this.activeMonth): boolean {
    return !!this.getEventByDate(date, month);
  }

}
