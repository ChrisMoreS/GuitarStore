import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/productos-interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  constructor(private http:HttpClient) {}
  
  MostrarProductos(){
    return this.http.get<any>('http://localhost/ConexionGuitarStore/Productos.php');
  }
  
  ObtenerUnProducto(idProducto: string){
    return this.http.get<any>(`http://localhost/ConexionGuitarStore/Productos.php?idProducto=${idProducto}`);
  }

  InsertarUnProducto(formData:Productos){
    return this.http.post('http://localhost/ConexionGuitarStore/Productos.php',formData);
  }

  EditarUnProducto(idProducto: string, formData:Productos){
    return this.http.put(`http://localhost/ConexionGuitarStore/Productos.php?idProducto=${idProducto}`,formData);
  }

  BorrarUnProducto(idProducto: string){
    return this.http.delete(`http://localhost/ConexionGuitarStore/Productos.php?idProducto=${idProducto}`);
  }

  // Instrumentos

  ObtenerProductoPorCategoria(NombreCategoria: string){
    return this.http.get(`http://localhost/ConexionGuitarStore/Productos.php?NombreCategoria=${NombreCategoria}`)
  }

  ObtenerProductoPorMarca(NombreMarca: string){
    return this.http.get(`http://localhost/ConexionGuitarStore/Productos.php?NombreMarca=${NombreMarca}`)
  }

}
