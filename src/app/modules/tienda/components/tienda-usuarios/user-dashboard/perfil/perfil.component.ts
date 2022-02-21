import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  cliente: any =[];

  constructor(
    private ClientesSVC: ClientesService,
    private Cookies: CookieService
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

  BorrarUsuario(){

  Swal.fire({
    icon: 'question',
    title: '¿Quieres borrar este Usuario?',
    text: 'Una vez borrado ya no se podrá recuperar',
    showCancelButton: true,
    showConfirmButton: true
  }).then(
    result => {
      if (result.isConfirmed) {
        this.ClientesSVC.BorrarUnCliente(String(this.idUsuario)).subscribe(
          res => {
            Swal.fire({
              icon: 'success',
              title: 'Usuario Eliminado',
              text: 'El usuario ha sido eliminado con éxito',
              showConfirmButton: true
            }).then(
              result2 => {
                if (result2.isConfirmed) {
                  this.Cookies.deleteAll('');
                  this.Cookies.deleteAll('/admin');
                  localStorage.clear();
                  window.location.reload();
                }
              }
            );
          }
        );
      }
      if (result.isDenied) {
        Swal.close();
      }
    }
  );
}
  
}
