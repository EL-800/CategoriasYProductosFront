import { Product } from "./producto.categoria";

export class Category{
    idCategoria : number = 0;
    nombreCategoria: string = '';
    descripcionCategoria : string = '';

    productos : Product[] = []; 
}