import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-agregar',
  templateUrl: './cliente-agregar.component.html',
  styleUrls: ['./cliente-agregar.component.scss']
})
export class ClienteAgregarComponent implements OnInit {

  form = this.Formulario.group({
    NombreUsuario: ['Jorge'],
    ApellidosUsuario: ['Hernadez'],
    Usuario: ['JorGZ'],
    EmailUsuario: ['Jorge@gmail.com'],
    ContrasenaUsuario: ['1234'],
    ContrasenaRUsuario: ['1234'],
    CategoriaUsuario: ['Registered']
  });

  constructor(
    private ClientesSVC: ClientesService,
    private Formulario: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  RegistrarUsuario(){
    if (this.form.value.ContrasenaUsuario == this.form.value.ContrasenaRUsuario) {

      this.ClientesSVC.InsertarUnCliente(this.form.value).subscribe(
        res => {
          if (res == 'agregado') {
            Swal.fire({
              icon: 'success',
              title: 'Usuario Agregado',
              text: `El usuario ${this.form.value.NombreUsuario} se ha agregado correctamente`,
              showConfirmButton: true
            }).then(
              result => {
                if (result.isConfirmed) {
                  window.location.href = '/GuitarStore/admin/usuarios';
                }
              }
            );
          }
          if (res == 'error usuario y email') {
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              text: 'El nombre de usuario y el Email ya existen'
            })
          }
          if (res == 'error usuario') {
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              text: 'El nombre de usuario ya existe'})
          }
          if (res == 'error email') {
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              text: 'El Email ya está registrado'
            })
          }
        }
      );
    }
  }

}
