import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/categorias-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient) {}

  MostrarCategorias(){
    return this.http.get<any>('http://localhost/ConexionGuitarStore/Categorias.php');
  }

  ObtenerUnaCategoria(idCategoria: String){
    return this.http.get<any>(`http://localhost/ConexionGuitarStore/Categorias.php?idCategoria=${idCategoria}`)
  }

  InsertarUnaCategorias(datosCategoria: Categorias){
    return this.http.post(`http://localhost/ConexionGuitarStore/Categorias.php`, datosCategoria);
  }

  ModificarUnaCategoria(idCategoria: String, datosCategoria: Categorias){
    return this.http.put(`http://localhost/ConexionGuitarStore/Categorias.php?idCategoria=${idCategoria}`, datosCategoria)
  }
  
  BorrarUnaCategoria(idCategoria: String){
    return this.http.delete(`http://localhost/ConexionGuitarStore/Categorias.php?idCategoria=${idCategoria}`)
  }

}
