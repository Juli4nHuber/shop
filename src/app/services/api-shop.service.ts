import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ApiShopService {
  constructor() {}

  async getProductos() : Promise<Producto[]>{
    let response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  }

  async getProducto(id: number): Promise<Producto>{
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  }

}
