import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-baterias',
  templateUrl: './baterias.component.html',
  styleUrls: ['./baterias.component.scss']
})
export class BateriasComponent implements OnInit {

  Baterias: any[''];

  constructor(
    private ProductosSVC: ProductosService
  ) { }

  ngOnInit(): void {
    this.VerBaterias();
  }

  VerBaterias(){
    this.ProductosSVC.ObtenerProductoPorCategoria('baterias').subscribe(res=>{
      this.Baterias = res;
    });
  }

}
