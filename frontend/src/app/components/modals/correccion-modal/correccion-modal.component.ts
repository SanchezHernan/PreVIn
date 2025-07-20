import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-correccion-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './correccion-modal.component.html',
  styleUrls: ['./correccion-modal.component.scss']
})
export class CorreccionModalComponent {
  @Input() descripcionCampo: string = '';
  @Input() archivo?: string; // opcional, como "Res_1234_NEA.pdf"

  @Output() guardar = new EventEmitter<string>();
  @Output() cancelar = new EventEmitter<void>();

  motivo: string = '';

  onAceptar() {
    if (this.motivo.trim()) {
      this.guardar.emit(this.motivo.trim());
    }
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
