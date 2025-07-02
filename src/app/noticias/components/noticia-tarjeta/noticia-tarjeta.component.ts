import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../interfaces/noticia.interface';

@Component({
  selector: 'app-noticia-tarjeta',
  templateUrl: './noticia-tarjeta.component.html',
  styleUrls: ['./noticia-tarjeta.component.scss']
})
export class NoticiaTarjetaComponent implements OnInit {

  @Input() noticia!: Noticia;

  constructor() { }

  ngOnInit(): void {
  }

}
