import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-viento',
  templateUrl: './viento.component.html',
  styleUrls: ['./viento.component.scss']
})
export class VientoComponent implements OnInit {

  Vientos: any[''];

  constructor(
    private ProductosSVC: ProductosService
  ) { }

  ngOnInit(): void {
    this.VerVientos();
  }

  VerVientos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('vientos').subscribe(res=>{
      this.Vientos = res;
    });
  }

}
