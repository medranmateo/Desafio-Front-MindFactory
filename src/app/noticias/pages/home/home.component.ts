import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  categorias: string[] = ['Politica', 'Deportes', 'Tecnologia', 'Economia', 'Internacional'];

  constructor() { }

  ngOnInit(): void {
  }



}
