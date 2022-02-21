import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CarritoService } from 'src/app/services/carrito.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tienda-header',
  templateUrl: './tienda-header.component.html',
  styleUrls: ['./tienda-header.component.scss']
})
export class TiendaHeaderComponent implements OnInit {

  user: boolean = false;
  id: any;
  usuario: any;
  UserName!: any;
  UserCategory!: any;

  carrito: any = [];
  productos: any= [];

  total: number = 0;

  constructor(private Cookie: CookieService, private ClienteSVC: ClientesService, private CarritoSVC: CarritoService, private ProductosSVC: ProductosService) { }

  ngOnInit(): void {
    this.ComprobarUsuarioIniciado();
    this.ComprobarCarrito();
  }

  ComprobarUsuarioIniciado(){
    if (localStorage.getItem('usuario')) {
      this.user = true;
      this.UserName = localStorage.getItem('usuario');
      this.id = localStorage.getItem('idUsuario');
      this.UserCategory = localStorage.getItem('Categoria')
      this.ClienteSVC.ObtenerUnClientes(this.id).subscribe(
        res => {this.usuario = res;}
      );
    }
  }

  ComprobarCarrito(){
    this.CarritoSVC.ObtenerItems(this.id).subscribe( res => {this.carrito = res;
      this.carrito.forEach((element: any) => {
        this.ProductosSVC.ObtenerUnProducto(element.IDProducto).subscribe( res => {
          res.push(element.CantidadCarrito);
          this.productos.push(res);
          this.total = this.total + (res[0].PrecioProducto * element.CantidadCarrito);
        }
        );
      });
    })
  }

  borrarCarrito(idproduc: any){
    var usu = String(localStorage.getItem('idUsuario'));
    this.CarritoSVC.borrarItem(usu, idproduc).subscribe(
      res => {
        window.location.reload();
      }
    );
  }

  BorrarTodoCarrito(){
    var usu = String(localStorage.getItem('idUsuario'));
    this.CarritoSVC.borrarTodo(usu).subscribe(
      res => {
        window.location.reload();
      }
    );
  }

  CarritoAgregar(producto: number){
    var usu = String(localStorage.getItem('idUsuario'));
    let carrito = {IDUsuario: usu, IDProducto: producto, CantidadCarrito: 1};
    this.CarritoSVC.AgregarItem(carrito).subscribe(res => {
      window.location.reload();
    });
  }

  cerrarSesion(){
    localStorage.clear();
    this.Cookie.deleteAll('', undefined, true, "Strict");
    this.Cookie.deleteAll('/admin');
    window.location.reload();
  }

}
