import { Component, OnInit } from '@angular/core';
import { ApiShopService } from '../../services/api-shop.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private apiShopService: ApiShopService){}

  productos? : Producto[];

  ngOnInit(): void {
    this.obtenerProductos();
  }

  async obtenerProductos(){
    let respuestaApi = await this.apiShopService.getProductos();
    this.productos =  respuestaApi;
  }
}
