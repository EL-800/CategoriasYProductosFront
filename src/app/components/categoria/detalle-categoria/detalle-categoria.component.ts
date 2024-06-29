import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/categoria.model';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalle-categoria',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalle-categoria.component.html',
  styleUrl: './detalle-categoria.component.css'
})
export class DetalleCategoriaComponent implements OnInit{

  categoria = new Category();

  constructor(private categoryService : CategoriaService, 
    private activateRoute: ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.categoryService.getCategoryById(Number(id)).subscribe({
            next: (data) => this.categoria = data,
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
  editarCategoria(){
    this.categoryService.editCategory(this.categoria).subscribe({
      next : () => this.router.navigate(['/categorias']),
      error: (error) => {
        alert('Ha ocurrido un error al actualizar')
        console.error(error)
      }
    })
  }
}
