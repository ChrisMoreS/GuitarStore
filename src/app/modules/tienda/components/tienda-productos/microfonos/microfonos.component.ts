import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-microfonos',
  templateUrl: './microfonos.component.html',
  styleUrls: ['./microfonos.component.scss']
})
export class MicrofonosComponent implements OnInit {

  Microfonos: any[''];

  constructor(
    private ProductosSVC: ProductosService
  ) { }

  ngOnInit(): void {
    this.VerMicrofonos();
  }

  VerMicrofonos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('microfonos').subscribe(res=>{
      this.Microfonos = res;
    });
  }
}
