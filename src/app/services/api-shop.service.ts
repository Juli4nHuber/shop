import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ApiShopService {
  constructor() {}

  async getProductos(){
    let response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  }
}
