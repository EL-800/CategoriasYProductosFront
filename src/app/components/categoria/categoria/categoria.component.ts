import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDeleteLeft, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Category } from '../../../models/categoria.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit{
  faPenToSquare = faPenToSquare;
  faDelete = faDeleteLeft;

  categorias : Category[] = []
  constructor(private categoriaService : CategoriaService){
  }

  ngOnInit(): void {
    this.categoriaService.getCategories().subscribe({
      next: (data) => this.categorias = data,
      error: (err) => console.error(err) 
    });
  }

  eliminarCategoria(id : number){
    this.categoriaService.deleteCategory(id).subscribe({
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
