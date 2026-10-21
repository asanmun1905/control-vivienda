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
    if (!this.corrienteVivienda) {
      this.corrienteHab1 = false;
    }
  }
  onClickCambiarCorrienteHab1() {
    if (this.corrienteVivienda) {
      this.corrienteHab1 = !this.corrienteHab1;
    }
    else {
      this.corrienteHab1 = false;
    }
  }
  estadoPersianaPadre = false;
  onEstadoPersiana(estado: boolean) {
    this.estadoPersianaPadre = estado;
  }
}
