import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MisVisadosComponent } from './pages/misvisados/misvisados.component';


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
    }
];
