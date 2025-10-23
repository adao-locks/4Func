import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems = [
    { icon: '🏠', label: 'Menu Principal', route: '/' },
    { icon: '🏛️', label: 'Conversor Romano', route: '/romano' },
    { icon: '🖥️', label: 'Conversor Binário', route: '/binario' },
    { icon: '3️⃣', label: 'Regra de Três', route: '/regra_de_tres' },
    { icon: '📟', label: 'Conversor Morse', route: '/morse' },
    { icon: '🔢', label: 'Números Armstrong', route: '/armstrong' }
  ];

  constructor(@Inject(Router) private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }

  closeNav() {
    alert('Fechar Menu');
  }
}
