import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

import { ProductosService } from 'src/app/services/productos.service';

import { Productos } from 'src/app/interfaces/productos-interface';
import { CarritoService } from 'src/app/services/carrito.service';
import { FormBuilder } from '@angular/forms';
import { Carrito } from 'src/app/interfaces/carrito-interface';

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
    private ProductosSVC: ProductosService,
    private CarritoSVC: CarritoService,
    private Formulario: FormBuilder
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

    CarritoAgregar(producto: number){
      var usu = String(localStorage.getItem('idUsuario'));
      let carrito = {IDUsuario: usu, IDProducto: producto, CantidadCarrito: 1};
      this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
        window.location.reload();
      });
      // console.log(carrito);
    }

    shuffleArray(array: any['']) {
      var m = array.length, t, i;
      
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      
      if (array === this.ListaSoftware) {
        return array;
      }

      return array.pop(array.splice(7,array.length));
    }
  
  verGuitarras(){
    this.ProductosSVC.ObtenerProductoPorCategoria('guitarras').subscribe(res => {
      this.ListaGuitarras = res;
      // console.log(this.ListaGuitarras);
      this.shuffleArray(this.ListaGuitarras);
    }) 
  }

  verBajos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('bajos').subscribe(res => {
      this.ListaBajos = res;
      // console.log(this.ListaBajos);
      this.shuffleArray(this.ListaBajos);
    })
  }

  verTeclados(){
    this.ProductosSVC.ObtenerProductoPorCategoria('teclados').subscribe(res => {
      this.ListaTeclados = res;
      // console.log(this.ListaTeclados);
      this.shuffleArray(this.ListaTeclados);
    })
  }

  verMicrofonos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('microfonos').subscribe(res => {
      this.ListaMicrofonos = res;
      // console.log(this.ListaMicrofonos);
      this.shuffleArray(this.ListaMicrofonos);
    })
  }

  verDJ(){
    this.ProductosSVC.ObtenerProductoPorCategoria('dj').subscribe(res => {
      this.ListaDJ = res;
      // console.log(this.ListaDJ);
      this.shuffleArray(this.ListaDJ);
    })
  }

  verVientos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('vientos').subscribe(res => {
      this.ListaVientos = res;
      // console.log(this.ListaVientos);
      this.shuffleArray(this.ListaVientos);
    })
  }

  verBaterias(){
    this.ProductosSVC.ObtenerProductoPorCategoria('baterias').subscribe(res => {
      this.ListaBaterias = res;
      // console.log(this.ListaBaterias);
      this.shuffleArray(this.ListaBaterias);
    })
  }

  verTradicionales(){
    this.ProductosSVC.ObtenerProductoPorCategoria('tradicional').subscribe(res => {
      this.ListaTradicional = res;
      // console.log(this.ListaTradicional);
      this.shuffleArray(this.ListaTradicional);
    })
  }

  verSoftware(){
    this.ProductosSVC.ObtenerProductoPorCategoria('software').subscribe(res => {
      this.ListaSoftware = res;
      // console.log(this.ListaSoftware);
      this.shuffleArray(this.ListaSoftware);
    })
  }

}
