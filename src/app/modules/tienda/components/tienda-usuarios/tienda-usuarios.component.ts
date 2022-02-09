import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-tienda-usuarios',
  templateUrl: './tienda-usuarios.component.html',
  styleUrls: ['./tienda-usuarios.component.scss']
})
export class TiendaUsuariosComponent implements OnInit {

  initiated!: boolean;
  id: any;
  usuario: any;
  constructor(private Cookie: CookieService, private ClienteSVC: ClientesService) { }

  ngOnInit(): void {
    this.ComprobarUsuarioIniciado();
  }

  ComprobarUsuarioIniciado(){
    if (localStorage.getItem('usuario')) {
      this.id = localStorage.getItem('idUsuario');
      this.ClienteSVC.ObtenerUnClientes(this.id).subscribe(
        res => {
          this.usuario = res;
          this.initiated = true;
        }
      )
    }
  }

}
