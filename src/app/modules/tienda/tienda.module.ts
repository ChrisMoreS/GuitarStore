import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule } from '@angular/router';
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
    TiendaMarcasComponent
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
        {path: '', redirectTo: 'inicio', pathMatch: 'full'}
      ]}
    ])
  ]
})
export class TiendaModule { }