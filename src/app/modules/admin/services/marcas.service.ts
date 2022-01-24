import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marcas } from '../interfaces/marcas-interface';

@Injectable({
  providedIn: 'root'
})

export class MarcasService {

    constructor(private http: HttpClient){}

    InsertarUnaMarca(datosMarcas: Marcas){
        return this.http.post(`http://localhost/ConexionGuitarStore/Marcas.php`,datosMarcas)
    }

    ObtenerMarcas(){
        return this.http.get<any>(`http://localhost/ConexionGuitarStore/Marcas.php`)
    }

    ObtenerUnaMarca(idMarca: String){
        return this.http.get<any>(`http://localhost/ConexionGuitarStore/Marcas.php?idMarca=${idMarca}`)
    }

    EditarUnaMarca(idMarca: String, datosMarcas: Marcas){
        return this.http.put(`http://localhost/ConexionGuitarStore/Marcas.php?idMarca=${idMarca}`,datosMarcas)
    }
    
    BorrarUnaMarca(idMarca: String){
        return this.http.delete(`http://localhost/ConexionGuitarStore/Marcas.php?idMarca=${idMarca}`)
    }

}