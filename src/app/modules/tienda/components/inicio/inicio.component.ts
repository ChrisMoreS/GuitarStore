import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  formLogin = this.Formulario.group({
    user: [''],
    contrasena: [''],
  });

  // formRegistro = this.Formulario.group({
  //   NombreUsuario: [''],
  //   ApellidosUsuario: [''],
  //   Usuario: [''],
  //   EmailUsuario: [''],
  //   ContrasenaUsuario: [''],
  //   ContrasenaRUsuario: ['']
  // });

  usu!: any;

  constructor(
    private ClientesSVC: ClientesService,
    private Formulario: FormBuilder,
    private Cookie: CookieService
    ) { }

  ngOnInit(): void {

  }

  ComprobarLoginUser(){
    this.ClientesSVC.comprobarLogin(this.formLogin.value).subscribe( res => {
      this.usu = res;
      this.Cookie.set('usuario', this.usu[0]['Usuario']);
      this.Cookie.set('categoria', this.usu[0]['CategoriaUsuario']);
      localStorage.setItem('usuario', this.usu[0]['Usuario']);
      window.location.reload();
    }, err => {
        Swal.fire({
          icon: 'error',
          title: 'El usuario no existe',
          showConfirmButton: true
        }).then( result => {
          if (result.isConfirmed) {
            window.location.reload();
          }
      }
    )})
  }

  // registroUsuario(){
  //   if (this.formRegistro.value.ContrasenaUsuario !== this.formRegistro.value.ContrasenaRUsuario) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Las contraseñas no coinciden',
  //       showConfirmButton: true
  //     }).then( result => {
  //       if (result.isConfirmed) {
  //         close();
  //       }
  //     } );
  //   }
  // }

}
