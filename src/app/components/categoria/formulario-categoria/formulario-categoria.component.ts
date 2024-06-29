import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Router } from '@angular/router';
import { Category } from '../../../models/categoria.model';

@Component({
  selector: 'app-formulario-categoria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-categoria.component.html',
  styleUrl: './formulario-categoria.component.css'
})
export class FormularioCategoriaComponent  implements OnInit{


  formCategoria = new FormGroup({
    nombreCategoria : new FormControl('',Validators.required),
    descCategoria : new FormControl('',Validators.required)
  }); 

  constructor(private categoriaService : CategoriaService, private router:Router){

  }

  ngOnInit(): void {
  }

  AgregarCategoria(){
    if(this.formCategoria.valid){
      
      const categoria = new Category();
      categoria.nombreCategoria = this.formCategoria.controls.nombreCategoria.value!;
      categoria.descripcionCategoria = this.formCategoria.controls.descCategoria.value!;

      this.categoriaService.addCategory(categoria).subscribe({
        next: () => {
          this.router.navigate(['/categorias'])
        },
        error: (err) => {
          alert('Ha ocurrido un error')
          console.error(err)
        }
      })
     console.log(this.formCategoria.value)
    }
    else{
      alert('Favor de llenar correctamente los campos')
    }
  }

}
