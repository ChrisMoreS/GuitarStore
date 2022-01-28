import { Component, OnInit } from '@angular/core';
import { ComprobarAdminService } from 'src/app/services/comprobaradmin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  adminlogged!: boolean;

  constructor(
    private ComprobarSVC: ComprobarAdminService
  ) { }

  ngOnInit(): void {
  }

  comprobaradmin () {
    
  }

}
