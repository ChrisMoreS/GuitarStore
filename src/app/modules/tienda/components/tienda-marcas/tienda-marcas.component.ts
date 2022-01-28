import { Component, OnInit } from '@angular/core';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-tienda-marcas',
  templateUrl: './tienda-marcas.component.html',
  styleUrls: ['./tienda-marcas.component.scss']
})
export class TiendaMarcasComponent implements OnInit {

  Marcas: any[''];

  constructor(
    private MarcasSVC: MarcasService
  ) { }

  ngOnInit(): void {
    this.VerGuitarras();
  }

  VerGuitarras(){
    this.MarcasSVC.ObtenerMarcas().subscribe(res=>{
      this.Marcas = res;
    });
  }


}
