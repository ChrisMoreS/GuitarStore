import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-tradicional',
  templateUrl: './tradicional.component.html',
  styleUrls: ['./tradicional.component.scss']
})
export class TradicionalComponent implements OnInit {

  Tradicional: any[''];

  constructor(
    private ProductosSVC: ProductosService,
    private CarritoSVC: CarritoService
  ) { }

  ngOnInit(): void {
    this.VerTradicional();
  }

  CarritoAgregar(producto: number){
    var usu = String(localStorage.getItem('idUsuario'));
    let carrito = {IDUsuario: usu, IDProducto: producto, CantidadCarrito: 1};
    this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
      window.location.reload();
    });
    // console.log(carrito);
  }

  VerTradicional(){
    this.ProductosSVC.ObtenerProductoPorCategoria('tradicional').subscribe(res=>{
      this.Tradicional = res;
    });
  }

}
