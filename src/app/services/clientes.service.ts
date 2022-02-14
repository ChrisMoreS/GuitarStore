import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Clientes } from '../interfaces/clientes-interface';
import { LoginAdmin } from '../interfaces/LoginAdmin-interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient, private cookies: CookieService) {}

  ObtenerClientes(){
    return this.http.get<any>(`http://localhost/ConexionGuitarStore/Clientes.php`)
  }

  ObtenerUnClientes(idCliente: String){
    return this.http.get<any>(`http://localhost/ConexionGuitarStore/Clientes.php?idCliente=${idCliente}`)
  }

  InsertarUnCliente(datosCliente:Clientes){
    return this.http.post(`http://localhost/ConexionGuitarStore/Clientes.php`,datosCliente)
  }

  EditarUnCliente(idCliente: String, datosCliente:Clientes){
    return this.http.put(`http://localhost/ConexionGuitarStore/Clientes.php?idCliente=${idCliente}`,datosCliente)
  }

  BorrarUnCliente(idCliente: String){
    return this.http.delete(`http://localhost/ConexionGuitarStore/Clientes.php?idCliente=${idCliente}`)
  }
  
  comprobarLogin (datosForm: LoginAdmin) {
    return this.http.post(`http://localhost/ConexionGuitarStore/Login.php?user=${datosForm.user}&contrasena=${datosForm.contrasena}`,datosForm);
  }

}
