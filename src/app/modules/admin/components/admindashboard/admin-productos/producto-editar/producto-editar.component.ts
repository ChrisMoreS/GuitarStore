import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.scss']
})
export class ProductoEditarComponent implements OnInit {
  producto = this.Formulario.group({
    NombreProducto: [''],
    DescripcionProducto: [''],
    PrecioProducto: [''],
    MarcaProducto: [''],
    CategoriaProducto: [''],
    ExistenciasProducto: [''],
    ActivadoProducto: ['']
  });

  categorias: any = [];
  marcas: any = [];

  idProducto!: any;

  constructor(
    private ProductosSVC: ProductosService,
    private CategoriasSVC: CategoriasService,
    private MarcasSVC: MarcasService,
    private Formulario: FormBuilder,
    private Activated: ActivatedRoute
  ) { 
    this.idProducto = this.Activated.snapshot.paramMap.get('id');
    this.conseguirProducto(this.idProducto);
  }

  ngOnInit(): void {
    this.ObtenerCategorias();
    this.ObtenerMarcas();
  }

  conseguirProducto(id: any){
    this.ProductosSVC.ObtenerUnProducto(id).subscribe(
      res => {
        this.producto.setValue({
          NombreProducto: res[0]['NombreProducto'],
          DescripcionProducto: res[0]['DescripcionProducto'],
          PrecioProducto: res[0]['PrecioProducto'],
          MarcaProducto: res[0]['MarcaProducto'],
          CategoriaProducto: res[0]['CategoriaProducto'],
          ExistenciasProducto: res[0]['ExistenciasProducto'],
          ActivadoProducto: res[0]['ActivadoProducto']
        });
      }
    );
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

  EditarProducto(){
    this.ProductosSVC.EditarUnProducto(this.idProducto, this.producto.value).subscribe(
      res => {
        Swal.fire({
          icon: 'success',
          title: 'Producto Editado',
          text: `El Producto ${this.producto.value.NombreProducto} se ha editado correctamente`,
          showConfirmButton: true
        }).then(
          result => {
            if (result.isConfirmed) {
              window.location.href = '#/admin/productos';
            }
          }
        );
      }
    );
  }

}
