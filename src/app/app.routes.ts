import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'inicio', component: HomeComponent},
    {
        path: 'galeria',
        loadComponent: () => import('./modules/gallery/gallery.component').then(c => c.GalleryComponent)
    }
];
