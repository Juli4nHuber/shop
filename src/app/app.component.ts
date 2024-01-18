import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './core/components/tabs/tabs.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, TabsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private route: ActivatedRoute) {};

  title?: string;

  ngOnInit(): void {
    this.title = this.route.snapshot['title'];
  }
}
