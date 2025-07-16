import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CircIconComponent } from '../../components/circ-icon/circ-icon.component';

@Component({
  selector: 'app-docyplanos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    CircIconComponent
  ],
  templateUrl: './docyplanos.component.html',
  styleUrl: './docyplanos.component.scss'
})
export class DocyplanosComponent {

  constructor(private fb: FormBuilder) {}

  planosConstruccion = this.fb.array([this.createPlano()]);
  planillasVivienda  = this.fb.array([this.createPlano()]);

  form = this.fb.group({
    planosConstruccion: this.planosConstruccion,
    planillasVivienda: this.planillasVivienda,
  });

  createPlano(): FormGroup {
    return this.fb.group({
      descripcion: ['', Validators.required],
      archivo: [null, Validators.required],
    });
  }

  onFileSelected(event: Event, grupo: FormArray, index: number): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    grupo.at(index).get('archivo')?.setValue(file);
  }

  addFila(grupo: FormArray): void {
    grupo.push(this.createPlano());
  }

  removeFila(grupo: FormArray, index: number): void {
    grupo.removeAt(index);
  }

  getNombreArchivo(control: FormGroup): string {
    const archivo = control.get('archivo')?.value;
    return archivo?.name || '';
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
