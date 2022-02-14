import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-bajos',
  templateUrl: './bajos.component.html',
  styleUrls: ['./bajos.component.scss']
})
export class BajosComponent implements OnInit {

  Bajos: any[''];

  constructor(
    private ProductosSVC: ProductosService,
    private CarritoSVC: CarritoService
  ) { }

  ngOnInit(): void {
    this.VerBajos();
  }

  CarritoAgregar(producto: number){
    var usu = String(localStorage.getItem('idUsuario'));
    let carrito = {IDUsuario: usu, IDProducto: producto, CantidadCarrito: 1};
    this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
      window.location.reload();
    });
    // console.log(carrito);
  }

  VerBajos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('bajos').subscribe(res=>{
      this.Bajos = res;
    });
  }

}
