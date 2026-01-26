import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface RegistrationData {
  name: string;
  institute: string;
  email: string;
  phone_number: string;
  role: string;
  nationality: string;
  recity: string;
  biography: string;
  linkedin: string;
  github: string;
  specific_needs: string;
  field_expertise: string;
  whish_skills: string;
  QC_skills: string;
  familiarity_QC_hardware: string;
  QC_language: string;
  first_hackathon: string;
  ia_skills: string;
  hackathon_experience: string;
  infomed_SDGs: string;
  aspart_team: string;
  team_name: string;
  team_size: string;
  team_names: string;
  topics_QC: string;
  SDG_goals: string;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  id: number;
  email_sent: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitRegistration(
    data: RegistrationData,
    file: File
  ): Observable<RegistrationResponse> {

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append('file', file);

    return this.http
      .post<RegistrationResponse>(`${this.apiUrl}/register`, formData)
      .pipe(catchError(this.handleError));
  }

  getAllRegistrations(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/registrations`)
      .pipe(catchError(this.handleError));
  }

  healthCheck(): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/health`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = error.error?.error || `Error del servidor: ${error.status}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
