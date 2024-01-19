import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation } from '@angular/router';
import { ApiShopService } from '../../services/api-shop.service';
import { Producto } from '../../interfaces/producto';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as reStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.scss'
})
export class ArticuloComponent implements OnInit{
  constructor(private ac: ActivatedRoute, private api : ApiShopService){
    ac.params.subscribe(param => {
      if(param['id']){
        this.id = param['id'];
      }
    })
  }
  
  fullStar = faStar
  halfStar = faStarHalfStroke
  emptyStar = reStar
  producto? : Producto;
  id? : number;

  ngOnInit(): void {
    this.obtenerProducto(this.id!)

  }

  async obtenerProducto(id: number){
    this.producto  = await this.api.getProducto(id);
  }
}
