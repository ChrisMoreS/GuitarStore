import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tienda-usuarios',
  templateUrl: './tienda-usuarios.component.html',
  styleUrls: ['./tienda-usuarios.component.scss']
})
export class TiendaUsuariosComponent implements OnInit {

  constructor(private Cookies: CookieService) { }

  ngOnInit(): void {
    this.comprobarUsuarioIniciado();
  }

  comprobarUsuarioIniciado(){
    if (!localStorage.getItem('usuario')) {
      this.Cookies.deleteAll();
      localStorage.clear();
    }
  }

}
