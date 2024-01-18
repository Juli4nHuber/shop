import { Component } from '@angular/core';
import { faHouse, faUser, faBagShopping, faHeart, } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [FaIconComponent, RouterModule] ,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})

export class TabsComponent{
  iconHouse = faHouse;
  iconCart = faBagShopping;
  iconFavorite = faHeart;
  iconProfile = faUser;
}
