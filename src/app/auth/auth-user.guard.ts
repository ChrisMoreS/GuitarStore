import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  canActivate(): boolean {

    var DomainName = 'GuitarStore/';
    
    if (window.location.hostname !== "localhost") {
      DomainName = '';
    }
    if (!localStorage.getItem('usuario')) {
      window.location.href = '#/user/login';
      return false;
    }

    return true;
  }
  
}
