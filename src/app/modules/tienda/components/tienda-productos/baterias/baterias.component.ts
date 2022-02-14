import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-baterias',
  templateUrl: './baterias.component.html',
  styleUrls: ['./baterias.component.scss']
})
export class BateriasComponent implements OnInit {

  Baterias: any[''];

  constructor(
    private ProductosSVC: ProductosService,
    private CarritoSVC: CarritoService
  ) { }

  ngOnInit(): void {
    this.VerBaterias();
  }

  CarritoAgregar(producto: number){
    var usu = String(localStorage.getItem('idUsuario'));
    let carrito = {IDUsuario: usu, IDProducto: producto, CantidadCarrito: 1};
    this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
      window.location.reload();
    });
    // console.log(carrito);
  }


  VerBaterias(){
    this.ProductosSVC.ObtenerProductoPorCategoria('baterias').subscribe(res=>{
      this.Baterias = res;
    });
  }

}
