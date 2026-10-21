import { Component } from '@angular/core';
import { HabitacionComponent } from './components/habitacion/habitacion.component';

@Component({
  selector: 'app-root',
  imports: [HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'control-persiana';

  titulo = "CONTROL DE VIVIENDA";
  corrienteVivienda: boolean = false;
  corrienteHab1: boolean = false;
  onClickCambiarCorriente() {
    this.corrienteVivienda = !this.corrienteVivienda;
  }
  onClickCambiarCorrienteHab1() {
    this.corrienteHab1 = !this.corrienteHab1;
  }
}
