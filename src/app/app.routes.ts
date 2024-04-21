import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dawgs',
    pathMatch: 'full',
  },
  {
    path: 'dawgs',
    loadComponent: () => import('./dawgs/dawgs.page').then( m => m.DawgsPage)
  },
  {
    path: 'gatitos',
    loadComponent: () => import('./gatitos/gatitos.page').then( m => m.GatitosPage)
  },
  {
    path: 'birdies',
    loadComponent: () => import('./birdies/birdies.page').then( m => m.BirdiesPage)
  },
];
