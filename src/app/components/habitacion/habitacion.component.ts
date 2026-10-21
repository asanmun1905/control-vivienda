import { Component, input, output } from '@angular/core';
import { PersianaComponent } from './persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  titulo = "HABITACIÓN";

  corrienteHab1 = input<boolean>(false);
  estadoPersiana = output<boolean>();

  onEstadoPersiana(estado: boolean) {
    this.estadoPersiana.emit(estado);
  }
}
