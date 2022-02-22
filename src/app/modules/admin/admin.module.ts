import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminProductosComponent } from './components/admindashboard/admin-productos/admin-productos.component';
import { AdminClientesComponent } from './components/admindashboard/admin-clientes/admin-clientes.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AdminPantallaprincipalComponent } from './components/admindashboard/admin-pantallaprincipal/admin-pantallaprincipal.component';
import { ClienteEditarComponent } from './components/admindashboard/admin-clientes/cliente-editar/cliente-editar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoEditarComponent } from './components/admindashboard/admin-productos/producto-editar/producto-editar.component';
import { DataTablesModule } from 'angular-datatables';
import { ClienteAgregarComponent } from './components/admindashboard/admin-clientes/cliente-agregar/cliente-agregar.component';
import { ProductoAgregarComponent } from './components/admindashboard/admin-productos/producto-agregar/producto-agregar.component';

var DomainName = 'GuitarStore/';

if (window.location.hostname !== "localhost") {
  DomainName = 'GuitarStore/';
}

@NgModule({
  declarations: [
    AdmindashboardComponent,
    AdminProductosComponent,
    AdminClientesComponent,
    AdminheaderComponent,
    AdminPantallaprincipalComponent,
    AdminLoginComponent,
    ClienteEditarComponent,
    ProductoEditarComponent,
    ClienteAgregarComponent,
    ProductoAgregarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AdmindashboardComponent, canActivate: [AuthGuard], children:[
        {path: '', component: AdminPantallaprincipalComponent},
        {path: 'productos', component: AdminProductosComponent},
        {path: 'productos/:id', component: ProductoEditarComponent},
        {path: 'agregar/productos', component: ProductoAgregarComponent},
        {path: 'usuarios', component: AdminClientesComponent},
        {path: 'usuarios/:id', component: ClienteEditarComponent},
        {path: 'agregar/usuarios', component: ClienteAgregarComponent},
      ]},
      {path: 'login', component: AdminLoginComponent},
  ]),
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
  ],
  providers: [CookieService],
})
export class AdminModule { }
