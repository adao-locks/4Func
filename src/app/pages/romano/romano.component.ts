import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-romano',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './romano.component.html',
  styleUrl: './romano.component.css'
})
export class RomanoComponent {
  valor = '';
  tipoConversao = 'romano';
  resultado = '';

  converter() {
    if (this.tipoConversao === 'romano') {
      this.resultado = this.toRoman(Number(this.valor));
    } else {
      this.resultado = this.fromRoman(this.valor.toUpperCase()).toString();
    }
  }

  toRoman(num: number): string {
    if (!num) return '';
    const romanMap: [number, string][] = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let res = '';
    for (const [value, symbol] of romanMap) {
      while (num >= value) {
        res += symbol;
        num -= value;
      }
    }
    return res;
  }

  fromRoman(str: string): number {
    const map: Record<string, number> = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      const current = map[str[i]];
      const next = map[str[i + 1]];
      total += next > current ? next - current && i++ : current;
    }
    return total;
  }
}
