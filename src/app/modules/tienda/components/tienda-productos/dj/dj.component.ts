import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-dj',
  templateUrl: './dj.component.html',
  styleUrls: ['./dj.component.scss']
})
export class DjComponent implements OnInit {

  DJE: any[''];

  constructor(
    private ProductosSVC: ProductosService
  ) { }

  ngOnInit(): void {
    this.VerDJ();
  }

  VerDJ(){
    this.ProductosSVC.ObtenerProductoPorCategoria('dj').subscribe(res=>{
      this.DJE = res;
    });
  }
}
