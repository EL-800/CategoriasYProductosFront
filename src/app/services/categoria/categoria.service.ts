import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Category } from '../../models/categoria.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private URL_CATEGORIA = environment.URL_API_BACKEND + 'category'


  constructor(private http : HttpClient) { }

  getCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.URL_CATEGORIA,httpOptions)
  }

  getCategoryById(id:number) :Observable<Category>{
    const url = `${this.URL_CATEGORIA}/${id}`;
    return this.http.get<Category>(url)
  } 
  addCategory(categoria: Category): Observable<any>{
    return this.http.post<any>(this.URL_CATEGORIA, categoria, httpOptions)
  }

  editCategory(categoria: Category): Observable<any>{
    const url = `${this.URL_CATEGORIA}/${categoria.idCategoria}`;
    return this.http.put<any>(url, categoria, httpOptions)
  }

  deleteCategory(id:number) :Observable<Category>{
    const url = `${this.URL_CATEGORIA}/${id}`;
    return this.http.delete<Category>(url)
  }
}
