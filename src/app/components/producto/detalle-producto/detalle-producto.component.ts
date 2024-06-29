import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/producto.categoria';
import { ProductoService } from '../../../services/producto/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit{
  producto = new Product()

  constructor(private productoService : ProductoService, 
    private activateRoute: ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.productoService.getProductById(Number(id)).subscribe({
            next: (data) => {
              this.producto = data
              this.productoService.getCategoryByProductId(Number(this.producto.idProducto)).subscribe({
                next: (d) => this.producto.idCategoria = d.idCategoria,
                error: (error) => {
                  console.error(error)
                  alert("error al obtener la categoria")
                }
              })
            },
            error: (err) => console.error(err)
          })
        }
      },
      error: (err) => {
        console.error(err);
        this.router.navigate(['/categorias'])
      }
    })
  }
  editarProducto(){
    this.productoService.editProduct(this.producto).subscribe({
      next : () => this.router.navigate(['/productos']),
      error: (error) => {
        alert('Ha ocurrido un error al actualizar')
        console.error(error)
      }
    })
  }
}
