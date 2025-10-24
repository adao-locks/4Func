import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent) },
  { path: 'romano', loadComponent: () => import('./pages/romano/romano.component').then(m => m.RomanoComponent) },
  { path: 'binario', loadComponent: () => import('./pages/binario/binario.component').then(m => m.BinarioComponent) },
  { path: 'regra_de_tres', loadComponent: () => import('./pages/regra-de-tres/regra-de-tres.component').then(m => m.RegraDeTresComponent) },
  { path: 'morse', loadComponent: () => import('./pages/morse/morse.component').then(m => m.MorseComponent) },
  { path: 'armstrong', loadComponent: () => import('./pages/armstrong/armstrong.component').then(m => m.ArmstrongComponent) },
  { path: 'factoring', loadComponent: () => import('./pages/factoring/factoring.component').then(m => m.FactoringComponent) },
];1
