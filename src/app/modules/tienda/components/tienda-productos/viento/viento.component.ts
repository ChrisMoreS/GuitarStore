import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-viento',
  templateUrl: './viento.component.html',
  styleUrls: ['./viento.component.scss']
})
export class VientoComponent implements OnInit {

  Vientos: any[''];

  constructor(
    private ProductosSVC: ProductosService,
    private CarritoSVC: CarritoService
  ) { }

  ngOnInit(): void {
    this.VerVientos();
  }

  CarritoAgregar(producto: number){
    var usu = String(localStorage.getItem('idUsuario'));
    let carrito = {IDUsuario: usu, IDProducto: producto, CantidadCarrito: 1};
    this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
      window.location.reload();
    });
    // console.log(carrito);
  }

  VerVientos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('vientos').subscribe(res=>{
      this.Vientos = res;
    });
  }

}
