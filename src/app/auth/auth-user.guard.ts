import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  canActivate(): boolean {

    if (!localStorage.getItem('usuario')) {
      window.location.href = 'GuitarStore/user/login';
      return false;
    }

    return true;
  }
  
}
