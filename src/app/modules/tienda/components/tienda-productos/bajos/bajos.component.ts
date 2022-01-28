import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-bajos',
  templateUrl: './bajos.component.html',
  styleUrls: ['./bajos.component.scss']
})
export class BajosComponent implements OnInit {

  Bajos: any[''];

  constructor(
    private ProductosSVC: ProductosService
  ) { }

  ngOnInit(): void {
    this.VerBajos();
  }

  VerBajos(){
    this.ProductosSVC.ObtenerProductoPorCategoria('bajos').subscribe(res=>{
      this.Bajos = res;
    });
  }

}
