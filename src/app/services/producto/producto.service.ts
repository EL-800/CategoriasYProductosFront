import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/producto.categoria';
import { Observable } from 'rxjs';
import { Category } from '../../models/categoria.model';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private URL_PRODUCTO = environment.URL_API_BACKEND + 'product'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_PRODUCTO, httpOptions)
  }
  getProductById(id:number) :Observable<Product>{
    const url = `${this.URL_PRODUCTO}/${id}`;
    return this.http.get<Product>(url)
  } 

  addProduct(product: Product): Observable<any>{
    return this.http.post<any>(this.URL_PRODUCTO, product, httpOptions)
  }

  editProduct(product: Product): Observable<any>{
    const url = `${this.URL_PRODUCTO}/${product.idProducto}`;
    console.log(url);
    return this.http.put<any>(url, product, httpOptions)
  }

  getCategoryByProductId(id : number): Observable<Category>{
    const url = `${this.URL_PRODUCTO}/categoria/${id}`;
    return this.http.get<Category>(url,httpOptions);
  }
  deleteProduct(id:number) :Observable<Product>{
    const url = `${this.URL_PRODUCTO}/${id}`;
    return this.http.delete<Product>(url)
  }
}
