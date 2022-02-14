import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-teclados',
  templateUrl: './teclados.component.html',
  styleUrls: ['./teclados.component.scss']
})
export class TecladosComponent implements OnInit {

  Teclados: any[''];

  constructor(
    private ProductosSVC: ProductosService,
    private CarritoSVC: CarritoService
  ) { }

  ngOnInit(): void {
    this.VerTeclados();
  }

  CarritoAgregar(producto: number){
    var usu = String(localStorage.getItem('idUsuario'));
    let carrito = {IDUsuario: usu, IDProducto: producto, CantidadCarrito: 1};
    this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
      window.location.reload();
    });
    // console.log(carrito);
  }

  VerTeclados(){
    this.ProductosSVC.ObtenerProductoPorCategoria('teclados').subscribe(res=>{
      this.Teclados = res;
    });
  }

}
