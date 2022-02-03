import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tienda-header',
  templateUrl: './tienda-header.component.html',
  styleUrls: ['./tienda-header.component.scss']
})
export class TiendaHeaderComponent implements OnInit {

  user!: boolean;
  UserName!: any;
  constructor(private Cookie: CookieService) { }

  ngOnInit(): void {
    this.ComprobarUsuarioIniciado();
  }

  ComprobarUsuarioIniciado(){
    if (localStorage.getItem('usuario')) {
      this.user = true;
      this.UserName = localStorage.getItem('usuario');
    }
  }
}
