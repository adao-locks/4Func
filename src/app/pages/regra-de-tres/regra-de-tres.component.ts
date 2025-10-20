import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-regra-de-tres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './regra-de-tres.component.html',
  styleUrls: ['./regra-de-tres.component.css']
})
export class RegraDeTresComponent {
  valor1 = 0;
  valor2 = 0;
  valor3 = 0;
  resultadoRT: number | string = 0;

  calcularRegraDeTres() {
    const num1 = Number(this.valor1);
    const num2 = Number(this.valor2);
    const num3 = Number(this.valor3);

    if (!num1 || isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      this.resultadoRT = 0;
      return;
    }

    this.resultadoRT = (num2 / num1) * num3;
  }
}
