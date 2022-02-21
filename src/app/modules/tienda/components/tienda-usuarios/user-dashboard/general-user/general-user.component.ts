import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-general-user',
  templateUrl: './general-user.component.html',
  styleUrls: ['./general-user.component.scss']
})
export class GeneralUserComponent implements OnInit {

  cliente: any =[];

  constructor(
    private ClientesSVC: ClientesService
  ) { 
  }
  
  BuscarUsuario(id: any){
    this.ClientesSVC.ObtenerUnClientes(id).subscribe(res =>{
      this.cliente = res;
    });
  }
  
  idUsuario = localStorage.getItem('idUsuario');
  
  ngOnInit(): void {
    this.BuscarUsuario(this.idUsuario);
  }

}
