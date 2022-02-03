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
    return this.http.get<any>(`http:/localhost/ConexionesGuitarStore/Usuarios.php`)
  }

  ObtenerUnClientes(idUsuario: String){
    return this.http.get<any>(`http://localhost/ConexionGuitarStore/Usuarios.php?isUsuario=${idUsuario}`)
  }

  InsertarUnCliente(datosCliente:Clientes){
    return this.http.post(`http://localhost/ConexionGuitarStore/Usuarios.php`,datosCliente)
  }

  EditarUnCliente(idUsuario: String, datosCliente:Clientes){
    return this.http.put(`http://localhost/ConexionGuitarStore/Usuarios.php?idUsuario=${idUsuario}`,datosCliente)
  }

  BorrarUnCliente(idUsuario: String){
    return this.http.delete(`http://localhost/ConexionGuitarStore/Usuarios.php?idUsuario=${idUsuario}`)
  }
  
  comprobarLogin (datosForm: LoginAdmin) {
    return this.http.post(`http://localhost/ConexionGuitarStore/Login.php?user=${datosForm.user}&contrasena=${datosForm.contrasena}`,datosForm);
  }

}
