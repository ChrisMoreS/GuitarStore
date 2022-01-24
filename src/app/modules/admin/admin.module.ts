import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminProductosComponent } from './components/admindashboard/admin-productos/admin-productos.component';
import { AdminClientesComponent } from './components/admindashboard/admin-clientes/admin-clientes.component';
import { AdminTrabajadoresComponent } from './components/admindashboard/admin-trabajadores/admin-trabajadores.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/adminfooter/adminfooter.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';


@NgModule({
  declarations: [
    AdmindashboardComponent,
    AdminProductosComponent,
    AdminClientesComponent,
    AdminTrabajadoresComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AdmindashboardComponent, children:[
        {path: 'productos', component: AdminProductosComponent},
        {path: 'clientes', component: AdminClientesComponent},
        {path: 'trabajadores', component: AdminTrabajadoresComponent}
      ]},
      {path: 'login', component: AdminLoginComponent}
    ]),
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
