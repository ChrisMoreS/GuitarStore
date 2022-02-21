import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from '../interfaces/carrito-interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(
    private http: HttpClient
  ) { }

  AgregarItem(carrito: Carrito){
    return this.http.post(`http://localhost/ConexionGuitarStore/Carrito.php?IDUsuario=${carrito.IDUsuario}&IDProducto=${carrito.IDProducto}&CantidadCarrito=${carrito.CantidadCarrito}`, carrito);
  }

  ObtenerItems(IDUsuario: any){
    return this.http.get(`http://localhost/ConexionGuitarStore/Carrito.php?IDUsuario=${IDUsuario}`);
  }

  borrarItem(IDUsuario: any, IDProducto: any){
    return this.http.delete(`http://localhost/ConexionGuitarStore/Carrito.php?IDUsuario=${IDUsuario}&IDProducto=${IDProducto}`);
  }

  borrarTodo(IDUsuario: any){
    return this.http.delete(`http://localhost/ConexionGuitarStore/Carrito.php?IDUsuario=${IDUsuario}&BorrarTodo=1`);
  }

}
