import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { InicioComponent } from './modules/tienda/components/inicio/inicio.component';
import { TiendaContactoComponent } from './modules/tienda/components/tienda-contacto/tienda-contacto.component';
import { TiendaInicioComponent } from './modules/tienda/components/tienda-inicio/tienda-inicio.component';
import { TiendaMarcasComponent } from './modules/tienda/components/tienda-marcas/tienda-marcas.component';
import { BajosComponent } from './modules/tienda/components/tienda-productos/bajos/bajos.component';
import { BateriasComponent } from './modules/tienda/components/tienda-productos/baterias/baterias.component';
import { DjComponent } from './modules/tienda/components/tienda-productos/dj/dj.component';
import { GuitarrasComponent } from './modules/tienda/components/tienda-productos/guitarras/guitarras.component';
import { MicrofonosComponent } from './modules/tienda/components/tienda-productos/microfonos/microfonos.component';
import { ProductoDetallesComponent } from './modules/tienda/components/tienda-productos/producto-detalles/producto-detalles.component';
import { SoftwareComponent } from './modules/tienda/components/tienda-productos/software/software.component';
import { TecladosComponent } from './modules/tienda/components/tienda-productos/teclados/teclados.component';
import { TiendaProductosComponent } from './modules/tienda/components/tienda-productos/tienda-productos.component';
import { TradicionalComponent } from './modules/tienda/components/tienda-productos/tradicional/tradicional.component';
import { VientoComponent } from './modules/tienda/components/tienda-productos/viento/viento.component';
import { TiendaSobreNosotrosComponent } from './modules/tienda/components/tienda-sobre-nosotros/tienda-sobre-nosotros.component';
import { EditarUsuarioComponent } from './modules/tienda/components/tienda-usuarios/editar-usuario/editar-usuario.component';
import { LoginUserComponent } from './modules/tienda/components/tienda-usuarios/login-user/login-user.component';
import { RegisterUserComponent } from './modules/tienda/components/tienda-usuarios/register-user/register-user.component';
import { TiendaUsuariosComponent } from './modules/tienda/components/tienda-usuarios/tienda-usuarios.component';
import { GeneralUserComponent } from './modules/tienda/components/tienda-usuarios/user-dashboard/general-user/general-user.component';
import { PerfilComponent } from './modules/tienda/components/tienda-usuarios/user-dashboard/perfil/perfil.component';
import { UserDashboardComponent } from './modules/tienda/components/tienda-usuarios/user-dashboard/user-dashboard.component';

import { AdmindashboardComponent } from './modules/admin/components/admindashboard/admindashboard.component';
import { AdminProductosComponent } from './modules/admin//components/admindashboard/admin-productos/admin-productos.component';
import { AdminClientesComponent } from './modules/admin//components/admindashboard/admin-clientes/admin-clientes.component';
import { AdminheaderComponent } from './modules/admin//components/adminheader/adminheader.component';
import { AdminLoginComponent } from './modules/admin//components/admin-login/admin-login.component';
import { AdminPantallaprincipalComponent } from './modules/admin//components/admindashboard/admin-pantallaprincipal/admin-pantallaprincipal.component';
import { ClienteEditarComponent } from './modules/admin//components/admindashboard/admin-clientes/cliente-editar/cliente-editar.component';
import { ProductoEditarComponent } from './modules/admin//components/admindashboard/admin-productos/producto-editar/producto-editar.component';
import { ClienteAgregarComponent } from './modules/admin//components/admindashboard/admin-clientes/cliente-agregar/cliente-agregar.component';
import { ProductoAgregarComponent } from './modules/admin//components/admindashboard/admin-productos/producto-agregar/producto-agregar.component';
import { TiendaHeaderComponent } from './modules/tienda/components/tienda-header/tienda-header.component';
import { TiendaFooterComponent } from './modules/tienda/components/tienda-footer/tienda-footer.component';

@NgModule({
  declarations: [

    AppComponent,
    PageNotFoundComponent,
    InicioComponent,
    TiendaContactoComponent,
    TiendaMarcasComponent,
    TiendaInicioComponent,
    TiendaSobreNosotrosComponent,
    TiendaUsuariosComponent,
    TiendaProductosComponent,
    UserDashboardComponent,
    PerfilComponent,
    GeneralUserComponent,
    RegisterUserComponent,
    LoginUserComponent,
    EditarUsuarioComponent,
    VientoComponent,
    TradicionalComponent,
    TecladosComponent,
    SoftwareComponent,
    ProductoDetallesComponent,
    MicrofonosComponent,
    GuitarrasComponent,
    BajosComponent,
    BateriasComponent,
    DjComponent,
    AdmindashboardComponent,
    AdminProductosComponent,
    AdminClientesComponent,
    AdminheaderComponent,
    AdminLoginComponent,
    AdminPantallaprincipalComponent,
    ClienteEditarComponent,
    ProductoEditarComponent,
    ClienteAgregarComponent,
    ProductoAgregarComponent,
    TiendaHeaderComponent,
    TiendaFooterComponent,
    AdminheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
