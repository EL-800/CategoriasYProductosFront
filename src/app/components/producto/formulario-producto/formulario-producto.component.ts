import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/producto.categoria';
import { ProductoService } from '../../../services/producto/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {
  producto = new Product();

  constructor(private productoService: ProductoService, private router: Router) {

  }

  AgregarProducto() {
    this.productoService.addProduct(this.producto).subscribe({
      next: () => {
        this.router.navigate(['/productos'])
      },
      error: (err) => {
        alert('Ha ocurrido un error')
        console.error(err)
      }
    })
  }
}
