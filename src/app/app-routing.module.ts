import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarCategoriasComponent } from './components/registrar-categorias/registrar-categorias.component';
import { RegistrarProductosComponent } from './components/registrar-productos/registrar-productos.component';
import { RegistrarVentasComponent } from './components/registrar-ventas/registrar-ventas.component';
import { RegistrarComprasComponent } from './components/registrar-compras/registrar-compras.component';
import { ListarInventariosAgotadosComponent } from './components/listar-inventarios-agotados/listar-inventarios-agotados.component';
import { ListarInventarioCategoriasComponent } from './components/listar-inventario-categorias/listar-inventario-categorias.component';
import { ListarInventarioProductoComponent } from './components/listar-inventario-producto/listar-inventario-producto.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo:  'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registrar-categorias', component: RegistrarCategoriasComponent },
  { path: 'registrar-productos', component: RegistrarProductosComponent },
  { path: 'registrar-ventas', component: RegistrarVentasComponent },
  { path: 'registrar-compras', component: RegistrarComprasComponent },
  { path: 'listar-inventarios-categorias', component: ListarInventarioCategoriasComponent },
  { path: 'listar-inventarios-producto', component: ListarInventarioProductoComponent },
  { path: 'listar-inventarios-agotados', component: ListarInventariosAgotadosComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
