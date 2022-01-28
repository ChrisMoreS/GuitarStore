import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  Software: any[''];

  constructor(
    private ProductosSVC: ProductosService
  ) { }

  ngOnInit(): void {
    this.VerSoftware();
  }

  VerSoftware(){
    this.ProductosSVC.ObtenerProductoPorCategoria('software').subscribe(res=>{
      this.Software = res;
    });
  }

}
