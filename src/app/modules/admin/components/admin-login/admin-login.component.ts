import { Component, OnInit} from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { JWT_OPTIONS } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

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

  ComprobarLoginAdmin(){
    this.ComprobarSVC.comprobarLogin(this.form.value).subscribe(res => {
      this.usu = res;
      console.log(res);
      if (this.usu[0]['CategoriaUsuario'] == 'registered') {
        Swal.fire({
          icon: 'error',
          title: 'Error al Verificar',
          text: 'El usuario no es Administrador',
          showConfirmButton: true
        }).then( result => {
          if (result.isConfirmed ||result.dismiss) {
            window.location.href = '';
          }
        });
      }
      if (this.usu[0]['CategoriaUsuario'] == 'admin') {
        Swal.fire({
          icon: 'success',
          title: 'Usuario Verificado',
          text: 'El usuario ha sido verificado, pronto serás redireccionado al panel de control',
          showConfirmButton: true
        }).then( result => {
          if (result.isConfirmed || result.dismiss) {
            window.location.href = 'admin';
            localStorage.setItem('idUsuario', this.usu[0]['IDUsuario']);
            localStorage.setItem('usuario', this.usu[0]['UsuarioUsuario']);
            localStorage.setItem('ImagenPerfil', this.usu[0]['FotoPerfilUsuario']);
            localStorage.setItem('Categoria', this.usu[0]['CategoriaUsuario']);
            this.Cookie.set('usuario', this.usu[0]['UsuarioUsuario'])
            this.Cookie.set('categoria', this.usu[0]['CategoriaUsuario']);
          }
        });
      }
    }, err => {
      
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'El usuario no existe',
          showConfirmButton: true
        }).then( result => {
          if (result.isConfirmed || result.dismiss) {
            window.location.href = 'admin/login';
          }
      }
    )})
}

}
