import { Component } from '@angular/core';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CircIconComponent } from '../../components/circ-icon/circ-icon.component';
import { CorreccionModalComponent } from '../../components/modals/correccion-modal/correccion-modal.component';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  cantidad: number;
  tipoConstruccion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {tipoConstruccion: 'Vivienda', cantidad: 6},
  {tipoConstruccion: 'Local Comercial', cantidad: 6},
];

@Component({
  selector: 'app-evaluacion-catastral',
  standalone: true,
  imports: [
    MatCard, MatIcon, CircIconComponent, 
    MatCardTitle, CorreccionModalComponent, MatTableModule,
  ],
  templateUrl: './evaluacion-catastral.component.html',
  styleUrl: './evaluacion-catastral.component.scss'
})
export class EvaluacionCatastralComponent {

  professional = 'Rodriguez Peña, Luciano Raúl (ARQUITECTO)';

  displayedColumns: string[] = ['tipoConstruccion', 'cantidad'];
  dataSource = ELEMENT_DATA;

  info = {
  "partida": 148253,
  "tipoPosesion": "PROPIETARIO",
  "dni": "43.567.789",
  "titular": {
    "apellidos": "Ramirez",
    "nombres": "Juan Ángel"
  },
  "ubicacion": {
    "cuartel": 3,
    "distrito": 2,
    "seccion": 1,
    "manzana": 366,
    "lote_parcela": 1
  },
  "cuentas": {
    "osm": 2321,
    "tgi": 2344
  },
  "antecedente": "1113452",
  "domicilio": {
    "calle": "Suipacha",
    "numero": 564
  },
  "matricula": {
    "numero": 23123,
    "anio": 2023
  },
  "planoMensura": 5673
}

  abrirCorrecciones(): void {
    console.log('abrir correciones');
  }

  abrirCorreccionCampo(r: any): void {
    console.log('abrir correcion campo', r);
  }

  aprobar() {
    console.log('aprobar');
  }

  modalAbierto = false;

  registrarCorreccion(motivo: string) {
    console.log('Corrección enviada:', motivo);
    this.modalAbierto = false;
  }

}
