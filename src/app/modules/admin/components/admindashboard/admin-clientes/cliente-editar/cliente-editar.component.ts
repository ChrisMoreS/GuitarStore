import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';
import { Clientes } from 'src/app/interfaces/clientes-interface';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.scss']
})
export class ClienteEditarComponent implements OnInit {

  form = this.Formulario.group({
    NombreUsuario: [''],
    ApellidosUsuario: [''],
    Usuario: [''],
    EmailUsuario: [''],
    ContrasenaUsuario: [''],
    ContrasenaRUsuario: [''],
    CategoriaUsuario: ['']
  });

  constructor(
    private ClientesSVC: ClientesService,
    private Formulario: FormBuilder,
    private Activated: ActivatedRoute
  ) { 
    this.idUsuario = this.Activated.snapshot.paramMap.get("id");
    this.conseguirUsuario();
  }

  idUsuario!: any;
  usuario: any = [];

  
  ngOnInit(): void {
  }

  conseguirUsuario(){
    this.ClientesSVC.ObtenerUnClientes(this.idUsuario).subscribe(
      res => {this.form.setValue({
        NombreUsuario: res[0]['NombreUsuario'],
        ApellidosUsuario: res[0]['ApellidosUsuario'],
        Usuario: res[0]['UsuarioUsuario'],
        EmailUsuario: res[0]['EmailUsuario'],
        ContrasenaUsuario: res[0]['ContraseñaUsuario'],
        ContrasenaRUsuario: res[0]['ContraseñaUsuario'],
        CategoriaUsuario: res[0]['CategoriaUsuario']
      })}
    );
  }

  RegistrarUsuario(){
    if (this.form.value.ContrasenaUsuario == this.form.value.ContrasenaRUsuario) {

      this.ClientesSVC.EditarUnCliente(this.idUsuario, this.form.value).subscribe(
        res => {
          if (res == 'editado') {
            Swal.fire({
              icon: 'success',
              title: 'Usuario Editado',
              text: `El usuario ${this.form.value.NombreUsuario} se ha editado correctamente`,
              showConfirmButton: true
            }).then(
              result => {
                if (result.isConfirmed) {
                  window.location.href = '#/admin/usuarios';
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
