import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './binario.component.html',
  styleUrls: ['./binario.component.css']
})
export class BinarioComponent {
  valor = '';
  tipoConversao = 'binario';
  resultado = '';

  converter() {
    if (this.tipoConversao === 'binario') {
      this.resultado = this.toBinary(Number(this.valor));
    } else {
      this.resultado = this.fromBinary(this.valor).toString();
    }
  }

  toBinary(numero: number): string {
    if (isNaN(numero) || numero < 0) return 'Valor inválido';
    if (numero === 0) return '0';

    let binario = '';
    while (numero > 0) {
      const resto = numero % 2;
      binario = resto.toString() + binario;
      numero = Math.floor(numero / 2);
    }
    return binario;
  }

  fromBinary(binario: string): number {
    binario = String(binario).trim();

    if (!/^[01]+$/.test(binario)) {
      console.error('Valor binário inválido:', binario);
      return NaN;
    }

    let decimal = 0;
    let potencia = 0;

    for (let i = binario.length - 1; i >= 0; i--) {
      const digito = binario[i];
      if (digito === '1') {
        decimal += Math.pow(2, potencia);
      }
      potencia++;
    }

    return decimal;
  }
}
