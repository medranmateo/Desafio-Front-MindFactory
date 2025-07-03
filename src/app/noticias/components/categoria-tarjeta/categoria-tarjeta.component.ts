import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Noticia } from '../../interfaces/noticia.interface';

@Component({
  selector: 'app-categoria-tarjeta',
  templateUrl: './categoria-tarjeta.component.html',
  styleUrls: ['./categoria-tarjeta.component.scss']
})
export class CategoriaTarjetaComponent implements OnInit {

  @Input() noticia!: Noticia;
  @Output() clickTarjeta = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickTarjeta.emit(this.noticia._id);
  }

}
