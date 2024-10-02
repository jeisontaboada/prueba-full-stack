import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductosComponent } from './pages/productos/cremas.component';

import { ClienteComponent } from './pages/cliente/comanda.component';

export const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'producto', component: ProductosComponent },
      { path: 'cliente', component: ClienteComponent },
    ],
  },

  { path: '**', redirectTo: 'menu' },
];
