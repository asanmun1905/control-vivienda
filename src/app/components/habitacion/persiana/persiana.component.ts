import { Component, effect, output, input } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css'
})
export class PersianaComponent {
  titulo  = "PERSIANA";

  estadoPersiana = false;
  estadoPersianaOutput = output<boolean>();
  corrienteHab1 = input<boolean>(false);

  constructor() {
    effect(() => {
      if (!this.corrienteHab1() && this.estadoPersiana) {
        this.estadoPersiana = false;
        this.estadoPersianaOutput.emit(false);
      }
    });
  }

  onClickCambiarEstadoPersiana() {
    if (!this.corrienteHab1()) {
      return;
    }

    this.estadoPersiana = !this.estadoPersiana;
    this.estadoPersianaOutput.emit(this.estadoPersiana);
  }
}
