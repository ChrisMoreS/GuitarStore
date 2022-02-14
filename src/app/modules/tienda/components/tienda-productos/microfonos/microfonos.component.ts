import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-microfonos',
  templateUrl: './microfonos.component.html',
  styleUrls: ['./microfonos.component.scss']
})
export class MicrofonosComponent implements OnInit {

  Microfonos: any[''];

  constructor(
    private ProductosSVC: ProductosService,
    private CarritoSVC: CarritoService
  ) { }

  ngOnInit(): void {
    this.VerMicrofonos();
  }

  CarritoAgregar(producto: number){
    var usu = String(localStorage.getItem('idUsuario'));
    let carrito = {IDUsuario: usu, IDProducto: producto, CantidadCarrito: 1};
    this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
      window.location.reload();
    });
    // console.log(carrito);
  }

  VerMicrofonos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('microfonos').subscribe(res=>{
      this.Microfonos = res;
    });
  }
}
