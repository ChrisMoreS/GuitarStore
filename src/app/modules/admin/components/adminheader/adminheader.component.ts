import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent implements OnInit {

  user!: any;

  constructor(
    private Cookie: CookieService
  ) { }

  ngOnInit(): void {
    this.comprobarSesion();
  }

  comprobarSesion(){
    if (localStorage.getItem('usuario')) {
      this.user = localStorage.getItem('usuario');
    }
  }

  cerrarSesion(){
    localStorage.clear();
    this.Cookie.deleteAll('admin');
    window.location.reload();
  }

}
