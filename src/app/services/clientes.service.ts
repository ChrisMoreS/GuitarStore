import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/clientes-interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) {}

  ObtenerClientes(){
    return this.http.get<any>(`http:/localhost/ConexionesGuitarStore/Clientes.php`)
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
}
