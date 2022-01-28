import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-tradicional',
  templateUrl: './tradicional.component.html',
  styleUrls: ['./tradicional.component.scss']
})
export class TradicionalComponent implements OnInit {

  Tradicional: any[''];

  constructor(
    private ProductosSVC: ProductosService
  ) { }

  ngOnInit(): void {
    this.VerTradicional();
  }

  VerTradicional(){
    this.ProductosSVC.ObtenerProductoPorCategoria('tradicional').subscribe(res=>{
      this.Tradicional = res;
    });
  }

}
