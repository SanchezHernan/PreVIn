import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MisVisadosComponent } from './pages/misvisados/misvisados.component';
import { PrevisadosComponent } from './pages/previsados/previsados.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'misvisados',
        component: MisVisadosComponent,
        title: 'Mis Visados'
    },
    {
        path: 'previsados',
        component: PrevisadosComponent,
        title: 'Datos Catastrales'
    },
];
