import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  form = this.Formulario.group({
    NombreUsuario: [''],
    ApellidosUsuario: [''],
    Usuario: [''],
    EmailUsuario: [''],
    ContrasenaUsuario: [''],
    ContrasenaRUsuario: [''],
  });

  constructor(
    private ClientesSVC: ClientesService,
    private Formulario: FormBuilder,
    private Cookies: CookieService
  ) { }

  ngOnInit(): void {

  }

  RegistrarUsuario(){
      if (this.form.value.ContrasenaUsuario == this.form.value.ContrasenaRUsuario) {
  
        this.ClientesSVC.InsertarUnCliente(this.form.value).subscribe(
          res => {
            if (res == 'agregado') {
              window.location.href = 'user/login';
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
