import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.scss']
})
export class ProductoDetallesComponent implements OnInit {

  FormCarrito = this.Formulario.group({
    CantidadCarrito: ['1']
  });

  producto: any = [];
  marca: any;

  idProducto: any;

  constructor(
    private CarritoSVC: CarritoService,
    private Formulario: FormBuilder,
    private Activated: ActivatedRoute,
    private ProductoSVC: ProductosService,
    private MarcaSVC: MarcasService
  ) {

    this.idProducto = this.Activated.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.obtenerItem(this.idProducto);
  }
  
  obtenerItem(id: any){
    this.ProductoSVC.ObtenerUnProducto(id).subscribe(res => {
      this.producto = res;
      this.obtenerMarca();
    });
  }

  obtenerMarca(){
    this.MarcaSVC.ObtenerUnaMarca(this.producto[0].MarcaProducto).subscribe(
      res => {
        this.marca = res;
      }
    );
  }

  AgregarCarrito(){
    var usu = String(localStorage.getItem('idUsuario'));
    let carrito = {IDUsuario: usu, IDProducto: this.idProducto, CantidadCarrito: this.FormCarrito.value.CantidadCarrito};
    this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
      window.location.href = '/GuitarStore/productos'
    });
  }
}
