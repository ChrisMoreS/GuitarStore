import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthUserGuard } from './auth/auth-user.guard';
import { AuthGuard } from './auth/auth.guard';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminLoginComponent } from './modules/admin/components/admin-login/admin-login.component';
import { AdminClientesComponent } from './modules/admin/components/admindashboard/admin-clientes/admin-clientes.component';
import { ClienteAgregarComponent } from './modules/admin/components/admindashboard/admin-clientes/cliente-agregar/cliente-agregar.component';
import { ClienteEditarComponent } from './modules/admin/components/admindashboard/admin-clientes/cliente-editar/cliente-editar.component';
import { AdminPantallaprincipalComponent } from './modules/admin/components/admindashboard/admin-pantallaprincipal/admin-pantallaprincipal.component';
import { AdminProductosComponent } from './modules/admin/components/admindashboard/admin-productos/admin-productos.component';
import { ProductoAgregarComponent } from './modules/admin/components/admindashboard/admin-productos/producto-agregar/producto-agregar.component';
import { ProductoEditarComponent } from './modules/admin/components/admindashboard/admin-productos/producto-editar/producto-editar.component';
import { AdmindashboardComponent } from './modules/admin/components/admindashboard/admindashboard.component';
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

const routes: Routes = [
  {path: '', children: [
    {path: '', component: InicioComponent, children:[
      {path: '', component: TiendaInicioComponent},
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
    {path: '', redirectTo: '', pathMatch: 'full'},
  ]},
  {path: 'admin', children: [
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
  ]},
  {path: 'paginanoencontrada', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'paginanoencontrada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
