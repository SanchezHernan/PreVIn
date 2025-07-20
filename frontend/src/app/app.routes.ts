import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MisVisadosComponent } from './pages/misvisados/misvisados.component';
import { PrevisadosComponent } from './pages/previsados/previsados.component';
import { DocyplanosComponent } from './pages/docyplanos/docyplanos.component';
import { VisadosPresentadosComponent } from './pages/visados-presentados/visados-presentados.component';
import { EvaluacionCatastralComponent } from './pages/evaluacion-catastral/evaluacion-catastral.component';

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
    {   
        path: 'docyplanos',
        component: DocyplanosComponent,
        title: 'Documentos y Planos'
    },
    {
        path: 'visados-presentados',
        component: VisadosPresentadosComponent,
        title: 'Visados Presentados'
    },
    {
        path: 'evaluacion-catastral',
        component: EvaluacionCatastralComponent,
        title: 'Evaluación Catastral'
    }
];
