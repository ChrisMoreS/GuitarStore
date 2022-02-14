import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminProductosComponent } from './components/admindashboard/admin-productos/admin-productos.component';
import { AdminClientesComponent } from './components/admindashboard/admin-clientes/admin-clientes.component';
import { AdminTrabajadoresComponent } from './components/admindashboard/admin-trabajadores/admin-trabajadores.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/adminfooter/adminfooter.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AdminPantallaprincipalComponent } from './components/admindashboard/admin-pantallaprincipal/admin-pantallaprincipal.component';
import { DataTableDirective } from 'angular-datatables';


@NgModule({
  declarations: [
    AdmindashboardComponent,
    AdminProductosComponent,
    AdminClientesComponent,
    AdminTrabajadoresComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminLoginComponent,
    AdminPantallaprincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AdmindashboardComponent, canActivate: [AuthGuard], children:[
        {path: '', component: AdminPantallaprincipalComponent},
        {path: 'productos', component: AdminProductosComponent},
        {path: 'clientes', component: AdminClientesComponent},
        {path: 'trabajadores', component: AdminTrabajadoresComponent}
      ]},
      {path: 'login', component: AdminLoginComponent}
    ]),
    ReactiveFormsModule,
    FormsModule,
    DataTableDirective
  ],
  providers: [CookieService],
})
export class AdminModule { }
