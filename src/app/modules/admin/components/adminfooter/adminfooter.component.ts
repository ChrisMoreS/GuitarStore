import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-adminfooter',
  templateUrl: './adminfooter.component.html',
  styleUrls: ['./adminfooter.component.scss']
})
export class AdminfooterComponent implements OnInit {

  constructor(
    private Cookie: CookieService
  ) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.clear();
    this.Cookie.deleteAll('/admin');
    window.location.reload();
  }

}
