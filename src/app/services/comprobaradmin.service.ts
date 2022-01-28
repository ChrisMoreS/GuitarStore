import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/clientes-interface';

@Injectable({
  providedIn: 'root'
})
export class ComprobarAdminService {

  constructor(private http:HttpClient) {}

  comprobarAdmin () {
      
  }

}