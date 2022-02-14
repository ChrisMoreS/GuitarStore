import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.scss']
})
export class AdminClientesComponent implements OnInit, OnDestroy {

  clientes: any;

  constructor(
    private ClientesSVC: ClientesService
  ) { }

  ngOnInit(): void {
    this.ObtenerClientes();
  }

 ObtenerClientes(){
   this.ClientesSVC.ObtenerClientes().subscribe( res => {
    this.clientes = res;
    console.log(this.clientes);
   });
 }

 ngOnDestroy(): void {
     
 }

}
