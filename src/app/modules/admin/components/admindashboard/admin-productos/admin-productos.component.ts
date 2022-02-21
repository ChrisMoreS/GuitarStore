import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { Productos } from 'src/app/interfaces/productos-interface';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

declare var $:any;

@Component({ 
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.scss']
})
export class AdminProductosComponent implements OnInit, OnDestroy {

  productos: any = [''];
  producto: any[''];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  public Forma = this.Formulario.group({
    NombreProducto: [''],
    DescripcionProducto: [''],
    PrecioProducto: [''],
    PesoProducto: [''],
    ColorProducto: [''],
    CategoriaProducto: [''], 
    ImagenProducto: [''],
    ExistenciasProducto: [''],
    ActivadoProducto: ['']
  });
  

  constructor (
    private ProductoSVC: ProductosService,
    private Formulario: FormBuilder
    ) {}
    
  ngOnInit(): void {
    this.ObtenerProductos();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false
    };
  }  
    
  ObtenerProductos(){
    this.ProductoSVC.MostrarProductos().subscribe(
      (res:Productos) => {
        this.productos = res;
        this.dtTrigger.next(void 0);
      }
    )
  }

  borrarProductos(id: any){
    
  Swal.fire({
    icon: 'question',
    title: '¿Quieres borrar este producto?',
    text: 'Una vez borrado ya no se podrá recuperar',
    showCancelButton: true,
    showConfirmButton: true
  }).then(
    result => {
      if (result.isConfirmed) {
        this.ProductoSVC.BorrarUnProducto(id).subscribe(
          res => {
            Swal.fire({
              icon: 'success',
              title: 'Producto Eliminado',
              text: 'El producto ha sido eliminado con éxito',
              showConfirmButton: true
            }).then(
              result2 => {
                if (result2.isConfirmed) {
                  window.location.reload();
                }
              }
            );
          }
        );
      }
      if (result.isDenied) {
        Swal.close();
      }
    }
  );
  }
    
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
    