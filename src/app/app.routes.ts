import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
{
    path: '',
    component: HomeComponent
},
{
    path: 'buscar',
    component: BuscarComponent
},
{
    path: 'articulo',
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
}
];
