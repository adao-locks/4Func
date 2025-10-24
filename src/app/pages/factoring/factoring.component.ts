import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-factoring',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './factoring.component.html',
  styleUrl: './factoring.component.css'
})
export class FactoringComponent {
  valor: number = 0;
  resultado: number | string = '';

  converter(): void {
    if (typeof this.valor !== 'number' || this.valor < 1) {
      this.resultado = 'Digite um número inteiro positivo.';
      return;
    }

    const fatores: number[] = [];
    let n = this.valor;
    let divisor = 2;

    while (n > 1) {
      while (n % divisor === 0) {
        fatores.push(divisor);
        n = n / divisor;
      }
      divisor++;
    }

    this.resultado = `${this.valor} = ${fatores.join(' × ')}`;
  }
}
