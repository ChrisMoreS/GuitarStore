import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.component.html',
  styleUrls: ['./guitarras.component.scss']
})
export class GuitarrasComponent implements OnInit {

  Guitarras: any[''];

  constructor(
    private ProductosSVC: ProductosService
  ) { }

  ngOnInit(): void {
    this.VerGuitarras();
  }

  VerGuitarras(){
    this.ProductosSVC.ObtenerProductoPorCategoria('guitarras').subscribe(res=>{
      this.Guitarras = res;
    });
  }

}
