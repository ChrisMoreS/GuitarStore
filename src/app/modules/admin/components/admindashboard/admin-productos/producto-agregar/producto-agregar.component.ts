import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.scss']
})
export class ProductoAgregarComponent implements OnInit {

  producto = this.Formulario.group({
    NombreProducto: ['Nombre'],
    DescripcionProducto: ['Descripción del producto'],
    PrecioProducto: ['1000'],
    MarcaProducto: ['1'],
    CategoriaProducto: ['1'],
    ExistenciasProducto: ['50'],
    ActivadoProducto: ['1']
  });

  categorias: any = [];
  marcas: any = [];

  constructor(
    private ProductosSVC: ProductosService,
    private CategoriasSVC: CategoriasService,
    private MarcasSVC: MarcasService,
    private Formulario: FormBuilder
  ) { }

  ngOnInit(): void {
    this.ObtenerCategorias();
    this.ObtenerMarcas();
  }

  ObtenerCategorias(){
    this.CategoriasSVC.MostrarCategorias().subscribe(
      res => {
        this.categorias = res;
      }
    );
  }

  ObtenerMarcas(){
    this.MarcasSVC.ObtenerMarcas().subscribe(
      res => {
        this.marcas = res;
      }
    );
  }

  AgregarProducto(){
    this.ProductosSVC.InsertarUnProducto(this.producto.value).subscribe(
      res => {
        Swal.fire({
          icon: 'success',
          title: 'Producto Agregado',
          text: `El Producto ${this.producto.value.NombreProducto} se ha agregado correctamente`,
          showConfirmButton: true
        }).then(
          result => {
            if (result.isConfirmed) {
              window.location.href = '/GuitarStore/admin/productos';
            }
          }
        );
      }
    );
  }

}
