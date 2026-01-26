import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationService, RegistrationData } from '../../services/registration.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  fileName: string = '';
  selectedFile: File | null = null;
  isSubmitting: boolean = false;
  submitSuccess: boolean = false;
  submitError: string = '';

  // Textos en español (puedes cambiarlos según necesites)
  

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    public lang: LanguageService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      institute: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      file: ['', Validators.required],
      phone_number: ['', Validators.required],
      role: ['Estudiante / Student', Validators.required],
      nationality: ['', Validators.required],
      recity: ['', Validators.required],
      biography: ['', Validators.required],
      linkedin: ['', Validators.required],
      github: ['', Validators.required],
      specific_needs: ['', Validators.required],
      field_expertise: ['', Validators.required],
      whish_skills: ['', Validators.required],
      QC_skills: ['', Validators.required],
      familiarity_QC_hardware: ['', Validators.required],
      QC_language: ['', Validators.required],
      first_hackathon: ['', Validators.required],
      ia_skills: ['', Validators.required],
      hackathon_experience: ['', Validators.required],
      infomed_SDGs: ['', Validators.required],
      aspart_team: ['', Validators.required],
      team_name: ['', Validators.required], 
      team_size: ['', Validators.required],
      team_names: ['', Validators.required],
      topics_QC: ['', Validators.required],
      SDG_goals: ['', Validators.required]

    });

    // Health check al iniciar (opcional)
    // this.registrationService.healthCheck().subscribe({
    //   next: (response) => console.log('✅ Backend conectado:', response),
    //   error: (error) => console.warn('⚠️ Backend no disponible aún:', error.message)
    // });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    
    if (file) {
      // Validar tamaño (5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.registerForm.get('file')?.setErrors({ sizeError: true });
        this.fileName = '';
        this.selectedFile = null;
        alert('El archivo no debe superar 5MB');
        return;
      }

      // Validar tipo
      const allowedTypes = ['application/pdf', 'application/msword', 
                           'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        this.registerForm.get('file')?.setErrors({ typeError: true });
        this.fileName = '';
        this.selectedFile = null;
        alert('Solo se permiten archivos PDF, DOC o DOCX');
        return;
      }

      this.fileName = file.name;
      this.selectedFile = file;
      this.registerForm.patchValue({ file: file.name });
      this.registerForm.get('file')?.updateValueAndValidity();
      
      // console.log('Archivo seleccionado:', file.name, `(${(file.size / 1024).toFixed(2)} KB)`);
    }
  }

  onSubmit(): void {
    if (this.registerForm.invalid || !this.selectedFile) {
      console.log('Formulario inválido');
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    const formData: RegistrationData = {
      name: this.registerForm.value.name,
      institute: this.registerForm.value.institute,
      email: this.registerForm.value.email,
      phone_number: this.registerForm.value.phone_number,
      role: this.registerForm.value.role,
      nationality: this.registerForm.value.nationality,
      recity: this.registerForm.value.recity,
      biography: this.registerForm.value.biography,
      linkedin: this.registerForm.value.linkedin,
      github: this.registerForm.value.github,
      specific_needs: this.registerForm.value.specific_needs,
      field_expertise: this.registerForm.value.field_expertise,
      whish_skills: this.registerForm.value.whish_skills,
      QC_skills: this.registerForm.value.QC_skills,
      familiarity_QC_hardware: this.registerForm.value.familiarity_QC_hardware,
      QC_language: this.registerForm.value.QC_language,
      first_hackathon: this.registerForm.value.first_hackathon,
      ia_skills: this.registerForm.value.ia_skills,
      hackathon_experience: this.registerForm.value.hackathon_experience,
      infomed_SDGs: this.registerForm.value.infomed_SDGs,
      aspart_team: this.registerForm.value.aspart_team,
      team_name: this.registerForm.value.team_name,
      team_size: this.registerForm.value.team_size,
      team_names: this.registerForm.value.team_names,
      topics_QC: this.registerForm.value.topics_QC,
      SDG_goals: this.registerForm.value.SDG_goals
    };

    // console.log('📤 Enviando formulario...');

    this.registrationService.submitRegistration(formData, this.selectedFile)
      .subscribe({
        next: (response) => {
          // console.log('✅ Registro exitoso:', response);
          this.submitSuccess = true;
          this.isSubmitting = false;
          
          // Resetear formulario
          this.registerForm.reset({
            role: 'Estudiante/Student'
          });
          this.fileName = '';
          this.selectedFile = null;

          // Mensaje de éxito
          alert(`¡Registro enviado exitosamente!`);
        },
        error: (error) => {
          // console.error('❌ Error en el registro:', error);
          this.submitError = error.message || 'Error al enviar el registro. Intenta de nuevo.';
          this.isSubmitting = false;
          alert(this.submitError);
        }
      });
  }
}