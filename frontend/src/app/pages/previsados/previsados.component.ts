import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

/* ------------ Angular Material ------------- */
import { MatInputModule }   from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule }   from '@angular/material/radio';
import { MatSelectModule }  from '@angular/material/select';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule }    from '@angular/material/icon';
import { MatCardModule }    from '@angular/material/card';
import { CircIconComponent } from '../../components/circ-icon/circ-icon.component';

@Component({
  selector: 'app-previsados',
  standalone: true,
  templateUrl: './previsados.component.html',
  styleUrl: './previsados.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Material
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CircIconComponent
  ],
})
export class PrevisadosComponent {

  /* --------- datos “constantes” del template ---------- */
  tiposObra = [
    { value: 'relev', label: 'Relevamiento' },
    { value: 'nueva', label: 'Obra Nueva' },
    { value: 'ampl',  label: 'Ampliación / Refacción' },
    { value: 'confo', label: 'Conforme a Obra' },
  ];

  destinos = [
    'Vivienda',
    'Local Comercial',
    'Oficina/Consultorio',
    'Galpón/Depósito',
    'Cochera',
    'Otros',
  ];

  /* ---------------- Reactive Form --------------------- */
  catastralForm = this.fb.group({
    /* – Datos generales – */
    tipoInmueble: ['', Validators.required],
    tipoObra:      ['', Validators.required],

    /* – Inmueble & catastro – */
    partida:       ['', Validators.required],
    calle:         [''],
    numero:        [''],
    matricula:     [''],
    anio:          [''],
    planoMensura:  ['', Validators.required],
    cuartel:       [''],
    seccion:       [''],
    lote:          [''],
    distrito:      [''],
    manzana:       [''],
    ctaOsm:        [''],
    ctaTgi:        [''],

    posesion:      ['', Validators.required],
    dni:           ['', Validators.required],
    dniFile:       [null],
    apellidos:     ['', Validators.required],
    nombres:       ['', Validators.required],

    /* – Restricciones – */
    fileLotes5000: [null],
    fileCanadas:   [null],
    fileGasNea:    [null],
    fileEnersa:    [null],

    /* – Destino de obra – */
    destinos:         [[], Validators.required],
    cantidadDestinos: [1,  Validators.min(1)],

    /* – Antecedente – */
    antecedente:      [''],
    fileAntecedente:  [null],
  });

  /* --------------- ctor / helpers --------------------- */
  constructor(private fb: FormBuilder) {}

  // compara opciones para mat-select múltiple
  cmp = (a: string, b: string) => a === b;

  addDestino(): void {
    /* tu lógica para “agregar” destino */
  }

  removeDestino(): void {
    /* tu lógica para “quitar” destino */
  }

  buscarCalle(): void {
    /* abre diálogo o autocompleta */
  }

  onSubmit(): void {
    if (this.catastralForm.valid) {
      console.log(this.catastralForm.value);
      // … enviar al backend
    } else {
      this.catastralForm.markAllAsTouched();
    }
  }

  onFileSelected(event: Event, controlName: string) {
  const input = event.target as HTMLInputElement;
  const file = input?.files?.[0];
  if (file) {
    this.catastralForm.get(controlName)?.setValue(file);
  }
}
}
