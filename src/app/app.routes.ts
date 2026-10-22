import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home';

export const routes: Routes = [
    { path: '', 
    loadComponent: () => import('./home/home').then(m => m.Home) },
    { path: 'catalog',
    loadComponent: () => import('./catalog/catalog').then(m => m.Catalog) },   
];