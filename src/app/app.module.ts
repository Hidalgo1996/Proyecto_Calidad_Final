import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListarInventariosAgotadosComponent } from './components/listar-inventarios-agotados/listar-inventarios-agotados.component';
import { ListarInventarioCategoriasComponent } from './components/listar-inventario-categorias/listar-inventario-categorias.component';
import { ListarInventarioProductoComponent } from './components/listar-inventario-producto/listar-inventario-producto.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrarCategoriasComponent } from './components/registrar-categorias/registrar-categorias.component';
import { RegistrarComprasComponent } from './components/registrar-compras/registrar-compras.component';
import { RegistrarProductosComponent } from './components/registrar-productos/registrar-productos.component';
import { RegistrarVentasComponent } from './components/registrar-ventas/registrar-ventas.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ListarInventariosAgotadosComponent,
    ListarInventarioCategoriasComponent,
    ListarInventarioProductoComponent,
    MenuComponent,
    RegistrarCategoriasComponent,
    RegistrarComprasComponent,
    RegistrarProductosComponent,
    RegistrarVentasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
