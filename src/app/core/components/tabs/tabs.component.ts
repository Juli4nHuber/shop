import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterState } from '@angular/router';
import { faHouse, faUser, faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterModule, FaIconComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})

export class TabsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router  
  ){}
  
  iconHouse = faHouse;
  iconCart = faBagShopping;
  iconFavorite = faHeart;
  iconProfile = faUser;
  

}
