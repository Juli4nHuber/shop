import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.scss'
})
export class ArticuloComponent{
  constructor(private ac: ActivatedRoute){
    ac.params.subscribe(param => {
      console.log(param);
    })
  }
}
