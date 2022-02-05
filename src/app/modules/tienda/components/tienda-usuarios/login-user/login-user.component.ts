import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  form = this.Formulario.group({
    user: [''],
    contrasena: [''],
  })

  usu: any;

  constructor(
    private ComprobarSVC: ClientesService,
    private Formulario: FormBuilder,
    private Cookie: CookieService
  ) { }

  ngOnInit(): void {
  }

  ComprobarLoginUser(){
    this.ComprobarSVC.comprobarLogin(this.form.value).subscribe(res => {
      this.usu = res;
      console.log(res);

      if (this.usu[0]['CategoriaUsuario']) {
        window.location.href = '';
        localStorage.setItem('idUsuario', this.usu[0]['IDUsuario']);
        localStorage.setItem('usuario', this.usu[0]['Usuario']);
        localStorage.setItem('ImagenPerfil', this.usu[0]['FotoPerfilUsuario']);
        this.Cookie.set('usuario', this.usu[0]['Usuario'])
        this.Cookie.set('categoria', this.usu[0]['CategoriaUsuario']);
      }

    }, err => {
      
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'El usuario no existe',
          showConfirmButton: true
        }).then( result => {
          if (result.isConfirmed || result.dismiss) {
            window.location.href = 'user/login';
          }
      }
    )})
}
}
