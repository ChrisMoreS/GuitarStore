import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { TiendaHeaderComponent } from './components/tienda-header/tienda-header.component';
import { TiendaFooterComponent } from './components/tienda-footer/tienda-footer.component';
import { TiendaSobreNosotrosComponent } from './components/tienda-sobre-nosotros/tienda-sobre-nosotros.component';
import { TiendaContactoComponent } from './components/tienda-contacto/tienda-contacto.component';
import { TiendaInicioComponent } from './components/tienda-inicio/tienda-inicio.component';
import { TiendaProductosComponent } from './components/tienda-productos/tienda-productos.component';
import { GuitarrasComponent } from './components/tienda-productos/guitarras/guitarras.component';
import { BajosComponent } from './components/tienda-productos/bajos/bajos.component';
import { BateriasComponent } from './components/tienda-productos/baterias/baterias.component';
import { TecladosComponent } from './components/tienda-productos/teclados/teclados.component';
import { DjComponent } from './components/tienda-productos/dj/dj.component';
import { MicrofonosComponent } from './components/tienda-productos/microfonos/microfonos.component';
import { TradicionalComponent } from './components/tienda-productos/tradicional/tradicional.component';
import { VientoComponent } from './components/tienda-productos/viento/viento.component';
import { SoftwareComponent } from './components/tienda-productos/software/software.component';
import { TiendaMarcasComponent } from './components/tienda-marcas/tienda-marcas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { TiendaUsuariosComponent } from './components/tienda-usuarios/tienda-usuarios.component';
import { AuthUserGuard } from 'src/app/auth/auth-user.guard';
import { LoginUserComponent } from './components/tienda-usuarios/login-user/login-user.component'; 
import { UserDashboardComponent } from './components/tienda-usuarios/user-dashboard/user-dashboard.component';
import { RegisterUserComponent } from './components/tienda-usuarios/register-user/register-user.component';
import { PerfilComponent } from './components/tienda-usuarios/user-dashboard/perfil/perfil.component';
import { GeneralUserComponent } from './components/tienda-usuarios/user-dashboard/general-user/general-user.component';
import { ProductoDetallesComponent } from './components/tienda-productos/producto-detalles/producto-detalles.component';
import { EditarUsuarioComponent } from './components/tienda-usuarios/editar-usuario/editar-usuario.component';

var DomainName = 'GuitarStore/';

if (window.location.hostname !== "localhost") {
  DomainName = 'GuitarStore/';
}

@NgModule({
  declarations: [
    InicioComponent,
    TiendaHeaderComponent,
    TiendaFooterComponent,
    TiendaSobreNosotrosComponent,
    TiendaContactoComponent,
    TiendaInicioComponent,
    TiendaProductosComponent,
    GuitarrasComponent,
    BajosComponent,
    BateriasComponent,
    TecladosComponent,
    DjComponent,
    MicrofonosComponent,
    TradicionalComponent,
    VientoComponent,
    SoftwareComponent,
    TiendaMarcasComponent,
    TiendaUsuariosComponent,
    LoginUserComponent,
    UserDashboardComponent,
    RegisterUserComponent,
    PerfilComponent,
    GeneralUserComponent,
    ProductoDetallesComponent,
    EditarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: InicioComponent, children:[
        {path: 'inicio', component: TiendaInicioComponent},
        {path: 'contacto', component: TiendaContactoComponent},
        {path: 'sobre-nosotros', component: TiendaSobreNosotrosComponent},
        {path: 'marcas', component: TiendaMarcasComponent},
        {path: 'productos', component: TiendaProductosComponent},
        {path: 'productos/guitarras', component: GuitarrasComponent},
        {path: 'productos/bajos', component: BajosComponent},
        {path: 'productos/baterias', component: BateriasComponent},
        {path: 'productos/teclados', component: TecladosComponent},
        {path: 'productos/microfonos', component: MicrofonosComponent},
        {path: 'productos/dj', component: DjComponent},
        {path: 'productos/vientos', component: VientoComponent},
        {path: 'productos/tradicional', component: TradicionalComponent},
        {path: 'productos/software', component: SoftwareComponent},
        {path: 'productos/:id', component:ProductoDetallesComponent},
        {path: 'user', component: TiendaUsuariosComponent, children: [
          {path: '', component: UserDashboardComponent, canActivate: [AuthUserGuard], children:[
            {path: '', component: GeneralUserComponent},
            {path: 'perfil', component: PerfilComponent},
            {path: 'editar/:id', component: EditarUsuarioComponent}
          ]},
          {path: 'login', component: LoginUserComponent},
          {path: 'register', component: RegisterUserComponent}
        ]}
      ]},
      {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  ]),
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [CookieService],
})
export class TiendaModule { }
