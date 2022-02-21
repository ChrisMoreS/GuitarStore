import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.scss']
})
export class AdminClientesComponent implements OnInit, OnDestroy {

  clientes: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private ClientesSVC: ClientesService
  ) { }

  guardarID(id: any){
    localStorage.setItem('IDUsuarioModificar', id);
  }

  ngOnInit(): void {
    this.ObtenerClientes();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false
    };
  }

 ObtenerClientes(){
   this.ClientesSVC.ObtenerClientes().subscribe( res => {
    this.clientes = res;
    this.dtTrigger.next(void 0);
   });
 }

 borrarClientes(id:any){

  Swal.fire({
    icon: 'question',
    title: '¿Quieres borrar este Usuario?',
    text: 'Una vez borrado ya no se podrá recuperar',
    showCancelButton: true,
    showConfirmButton: true
  }).then(
    result => {
      if (result.isConfirmed) {
        this.ClientesSVC.BorrarUnCliente(id).subscribe(
          res => {
            Swal.fire({
              icon: 'success',
              title: 'Usuario Eliminado',
              text: 'El usuario ha sido eliminado con éxito',
              showConfirmButton: true
            }).then(
              result2 => {
                if (result2.isConfirmed) {
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

 ngOnDestroy(): void {
  this.dtTrigger.unsubscribe();
 }

}
