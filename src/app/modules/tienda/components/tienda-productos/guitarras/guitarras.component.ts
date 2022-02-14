import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.component.html',
  styleUrls: ['./guitarras.component.scss']
})
export class GuitarrasComponent implements OnInit {

  Guitarras: any[''];

  constructor(
    private ProductosSVC: ProductosService,
    private CarritoSVC: CarritoService
  ) { }

  ngOnInit(): void {
    this.VerGuitarras();
  }

  CarritoAgregar(producto: number){
    var usu = String(localStorage.getItem('idUsuario'));
    let carrito = {IDUsuario: usu, IDProducto: producto, CantidadCarrito: 1};
    this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
      window.location.reload();
      // console.log(res);
    });
    // console.log(carrito);
  }

  VerGuitarras(){
    this.ProductosSVC.ObtenerProductoPorCategoria('guitarras').subscribe(res=>{
      this.Guitarras = res;
    });
  }

}
