import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { VisadoCardComponent } from '../../components/visado-card/visado-card.component';

@Component({
  selector: 'app-visados-presentados',
  standalone: true,
  imports: [VisadoCardComponent, MatDividerModule, CommonModule],
  templateUrl: './visados-presentados.component.html',
  styleUrl: './visados-presentados.component.scss'
})
export class VisadosPresentadosComponent {

  title = 'Visados Presentados'

  visadosEnEvaluacion = [
    {
      numero: 2127,
      partida: 116432,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Conforme Obra',
      fase: 'PRESENTADO',
      color: '#ffe598',
      accion: 'EVALUAR'
    },
    {
      numero: 2841,
      partida: 129853,
      inicio: new Date('2024-01-08'),
      descripcion: 'Más de 3 Pisos – Ampliación/Refacción',
      fase: 'RESPONDIDO',
      color: '#92ccdd',
      accion: 'ESPERANDO RESPUESTA'
    },
    {
      numero: 3811,
      partida: 148391,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Relevamiento',
      fase: 'CORRECCIÓN',
      color: '#e4b9b4',
      accion: 'EVALUAR'
    },
    // …
  ];

  visadosPresentados = [
    {
      numero: 2127,
      partida: 116432,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Conforme a Obra',
      fase: 'APROBADO',
      color: '#00b050',
      accion: 'EXP. 1116742'
    },
    {
      numero: 2841,
      partida: 129853,
      inicio: new Date('2024-01-08'),
      descripcion: 'Más de 3 Pisos – Ampliación/Regacción',
      fase: 'APROBADO',
      color: '#00b050',
      accion: 'EXP. 1116823'
    },
    {
      numero: 3811,
      partida: 148391,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Relevamiento',
      fase: 'APROBADO',
      color: '#00b050',
      accion: 'EXP. 1117234'
    },
    // …
  ];
}
