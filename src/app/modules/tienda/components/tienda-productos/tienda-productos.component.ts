import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

import { ProductosService } from 'src/app/services/productos.service';

import { Productos } from 'src/app/interfaces/productos-interface';

@Component({
  selector: 'app-tienda-productos',
  templateUrl: './tienda-productos.component.html',
  styleUrls: ['./tienda-productos.component.scss']
})
export class TiendaProductosComponent implements OnInit {

  ListaGuitarras: any[''];
  ListaBajos: any[''];
  ListaBaterias: any[''];
  ListaTeclados: any[''];
  ListaMicrofonos: any[''];
  ListaDJ: any[''];
  ListaVientos: any[''];
  ListaTradicional: any[''];
  ListaSoftware: any[''];

  constructor( 
    private ProductosSVC: ProductosService
   ) { }

  ngOnInit(): void {
    this.verGuitarras();
    this.verBajos();
    this.verBaterias();
    this.verTeclados();
    this.verMicrofonos();
    this.verDJ();
    this.verVientos();
    this.verTradicionales();
    this.verSoftware();
  }
  verGuitarras(){
    this.ProductosSVC.ObtenerProductoPorCategoria('guitarras').subscribe(res => {
      this.ListaGuitarras = res;
      console.log(this.ListaGuitarras);
    })
  }
  verBajos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('bajos').subscribe(res => {
      this.ListaBajos = res;
      console.log(this.ListaBajos);
    })
  }
  verTeclados(){
    this.ProductosSVC.ObtenerProductoPorCategoria('teclados').subscribe(res => {
      this.ListaTeclados = res;
      console.log(this.ListaTeclados);
    })
  }
  verMicrofonos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('microfonos').subscribe(res => {
      this.ListaMicrofonos = res;
      console.log(this.ListaMicrofonos);
    })
  }
  verDJ(){
    this.ProductosSVC.ObtenerProductoPorCategoria('dj').subscribe(res => {
      this.ListaDJ = res;
      console.log(this.ListaDJ);
    })
  }  
  verVientos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('vientos').subscribe(res => {
      this.ListaVientos = res;
      console.log(this.ListaVientos);
    })
  }
  verBaterias(){
    this.ProductosSVC.ObtenerProductoPorCategoria('baterias').subscribe(res => {
      this.ListaBaterias = res;
      console.log(this.ListaBaterias);
    })
  }
  verTradicionales(){
    this.ProductosSVC.ObtenerProductoPorCategoria('tradicional').subscribe(res => {
      this.ListaTradicional = res;
      console.log(this.ListaTradicional);
    })
  }
  verSoftware(){
    this.ProductosSVC.ObtenerProductoPorCategoria('software').subscribe(res => {
      this.ListaSoftware = res;
      console.log(this.ListaSoftware);
    })
  }

}
