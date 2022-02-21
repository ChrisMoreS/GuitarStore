import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  AdminLogged!: boolean;

  constructor(
    private Cookies: CookieService
  ) { }

  ngOnInit(): void {
    this.comprobarAdmin();
   }

   comprobarAdmin(){
     if (this.Cookies.get('categoria').toLowerCase() == 'admin' ) {
       this.AdminLogged = true;
      }
      if (!localStorage.getItem('usuario')) {
        this.Cookies.deleteAll('/admin');
        localStorage.clear();
        window.location.href = 'admin/login';
    }
  }

}
