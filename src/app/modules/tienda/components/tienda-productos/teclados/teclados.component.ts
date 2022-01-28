import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-teclados',
  templateUrl: './teclados.component.html',
  styleUrls: ['./teclados.component.scss']
})
export class TecladosComponent implements OnInit {

  Teclados: any[''];

  constructor(
    private ProductosSVC: ProductosService
  ) { }

  ngOnInit(): void {
    this.VerTeclados();
  }

  VerTeclados(){
    this.ProductosSVC.ObtenerProductoPorCategoria('teclados').subscribe(res=>{
      this.Teclados = res;
    });
  }

}
