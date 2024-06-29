import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria/categoria.component';
import { FormularioCategoriaComponent } from './components/categoria/formulario-categoria/formulario-categoria.component';
import { DetalleCategoriaComponent } from './components/categoria/detalle-categoria/detalle-categoria.component';
import { ProductoComponent } from './components/producto/producto/producto.component';
import { FormularioProductoComponent } from './components/producto/formulario-producto/formulario-producto.component';
import { DetalleProductoComponent } from './components/producto/detalle-producto/detalle-producto.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'categorias', component: CategoriaComponent},
    {path: 'categorias/addCategoria', component: FormularioCategoriaComponent},
    {path: 'categorias/:id', component: DetalleCategoriaComponent},
    {path: 'productos', component: ProductoComponent},
    {path: 'productos/addProducto', component: FormularioProductoComponent},
    {path: 'productos/:id', component: DetalleProductoComponent},
    
];
