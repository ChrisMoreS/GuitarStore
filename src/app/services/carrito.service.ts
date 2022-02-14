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

}
