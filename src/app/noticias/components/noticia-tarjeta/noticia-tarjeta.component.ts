import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Noticia } from '../../interfaces/noticia.interface';

@Component({
  selector: 'app-noticia-tarjeta',
  templateUrl: './noticia-tarjeta.component.html',
  styleUrls: ['./noticia-tarjeta.component.scss']
})
export class NoticiaTarjetaComponent implements OnInit {

  @Input() noticia!: Noticia;

  @Output() clickTarjeta = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit(): void {
  }
  
  onClick() {
    console.log('Noticia seleccionada:', this.noticia);
    this.clickTarjeta.emit(this.noticia._id);
  }


}
