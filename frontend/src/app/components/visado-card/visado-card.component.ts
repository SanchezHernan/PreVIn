import { Component, Input } from '@angular/core';
import { MatCardModule }   from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-visado-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './visado-card.component.html',
  styleUrls: ['./visado-card.component.scss']
})
export class VisadoCardComponent {
  // aceptamos cualquier objeto, sin interfaz explícita
  @Input() visado!: any;
}