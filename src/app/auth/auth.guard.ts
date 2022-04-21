import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ClientesService } from '../services/clientes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {  

  constructor(private Cookies: CookieService){

  }

  canActivate(): boolean {


    if (this.Cookies.get('categoria').toLowerCase() !== 'admin') {
      Swal.fire({
        icon: 'warning',
        title: 'No hay una sesión de administrador iniciada',
        confirmButtonText: 'Error'
      }).then( function (result) {
        if (true) {
          window.location.href = '';
          return false;
        }
        });
    }

    if (!this.Cookies.get('categoria')) {
      Swal.fire({
        icon: 'warning',
        title: 'No hay una sesión de administrador iniciada',
        confirmButtonText: 'Error'
      }).then( function (result) {
        if (true) {
          window.location.href = '#/admin/login';
          return false;
        }
        });
    }
    return true;
  }
  
}
