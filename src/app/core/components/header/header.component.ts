import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  title?: string;
  constructor(private router: Router){};

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.title =  event.url.slice(1);
      } 
    });
  }

}
