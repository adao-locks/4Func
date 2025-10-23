import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-armstrong',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './armstrong.component.html',
  styleUrl: './armstrong.component.css'
})
export class ArmstrongComponent {
  valor: number = 0;
  resultado: string = '';

  converter(num: number): boolean {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;
    for (let char of numStr) {
      const digit = parseInt(char, 10);
      sum += Math.pow(digit, numDigits);
    }
    this.resultado = sum === num ? 'É um número Armstrong' : 'Não é um número Armstrong';
    return sum === num;
  }
}
