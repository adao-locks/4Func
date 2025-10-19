import { Component } from '@angular/core';

@Component({
  selector: 'app-regra-de-tres',
  standalone: true,
  imports: [],
  templateUrl: './regra-de-tres.component.html',
  styleUrl: './regra-de-tres.component.css'
})
export class RegraDeTresComponent {
  valor1 = '';
  valor2 = '';
  valor3 = '';
  resultadoRT = '';

  calcularRegraDeTres() {
    const num1 = parseFloat(this.valor1);
    const num2 = parseFloat(this.valor2);
    const num3 = parseFloat(this.valor3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === 0) {
      this.resultadoRT = 'Entrada inválida';
      return;
    }

    const resultado = (num2 * num3) / num1;
    this.resultadoRT = resultado.toString();
  }
}
