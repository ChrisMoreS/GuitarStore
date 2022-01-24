import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/productos-interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  constructor(private http:HttpClient) {}
  
  MostrarProductos(){
    return this.http.get<any>('/ConexionGuitarStore/Productos.php');
  }
  
  ObtenerUnProducto(idProducto: String){
    return this.http.get<any>(`/ConexionGuitarStore/Productos.php?idProducto=${idProducto}`);
  }

  InsertarUnProducto(formData:Productos){
    return this.http.post('/ConexionGuitarStore/Productos.php',formData);
  }

  EditarUnProducto(idProducto: String, formData:Productos){
    return this.http.put(`/ConexionGuitarStore/Productos.php?idProducto=${idProducto}`,formData);
  }

  BorrarUnProducto(idProducto: String){
    return this.http.delete(`/ConexionGuitarStore/Productos.php?idProducto=${idProducto}`);
  }

  // Instrumentos

  ObtenerProductoPorCategoria(NombreCategoria: String){
    return this.http.delete(`/ConexionGuitarStore/Productos.php?NombreCategoria=${NombreCategoria}`)
  }

  ObtenerProductoPorMarca(NombreMarca: String){
    return this.http.delete(`/ConexionGuitarStore/Productos.php?NombreMarca=${NombreMarca}`)
  }

}
