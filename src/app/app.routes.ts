import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'articulo/:id',
    component: ArticuloComponent
},
{
    path: 'favoritos',
    component: FavoritosComponent
},
{
    path: 'perfil',
    component: PerfilComponent
},
{
    path: 'carrito',
    component: CarritoComponent
},
{
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
}
];
