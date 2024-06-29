import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDeleteLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../models/producto.categoria';
import { ProductoService } from '../../../services/producto/producto.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  faPenToSquare = faPenToSquare;
  faDelete = faDeleteLeft;

  productos : Product[] = []

  constructor (private productoService : ProductoService){}

  ngOnInit(): void {
    this.productoService.getProducts().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error(err) 
    });
  }

  eliminarProducto(id : number){
    this.productoService.deleteProduct(id).subscribe({
      next: () => {
        location.reload(),
        alert("Registro eliminado correctamente")
      },
      error: (err) =>{
        console.error(err);
        alert("Ha ocurrido un error al eliminar el registro")
      } 
    })
  }
}
