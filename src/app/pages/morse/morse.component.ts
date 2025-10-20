import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-morse',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './morse.component.html',
  styleUrl: './morse.component.css'
})
export class MorseComponent {
  tipoConversao: any;
  resultado: string = '';
  valor: string = '';

  converter() {
    if (this.tipoConversao === 'morse') {
      this.resultado = this.toMorse((this.valor));
    } else {
      this.resultado = this.fromMorse(this.valor.toUpperCase()).toString();
    }
  }

  morseCodeMap: { [key: string]: string } = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    ' ': '/'
  };

  toMorse(Texto: string): string {

    let morseText = '';
    Texto = (Texto || '').toUpperCase();
    for (const char of Texto) {
      if (this.morseCodeMap[char]) {
        morseText += this.morseCodeMap[char] + ' ';
      } else {
        morseText += '? ';
      }
    }
    return morseText.trim();
  }

  fromMorse(Texto: string): string {
    const inverseMap: { [key: string]: string } = {};
    for (const k in this.morseCodeMap) {
      inverseMap[this.morseCodeMap[k]] = k;
    }

    const tokens = (Texto || '').trim().split(/\s+/);
    let plainText = '';
    for (const token of tokens) {
      if (token === '/') {
        plainText += ' ';
      } else if (inverseMap[token]) {
        plainText += inverseMap[token];
      } else {
        plainText += '?';
      }
    }
    return plainText;
  }
}
