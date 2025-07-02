import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../../interfaces/noticia.interface';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.scss']
})
export class ListadoNoticiasComponent implements OnInit {

  noticias: Noticia[] = [];
  principal: Noticia | null = null;
  secundarias: Noticia[] = [];
  restoNoticias: Noticia[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    
    this.noticiasService.obtenerTodos().subscribe(noticias => {
      this.noticias = noticias;
      this.principal = noticias.length > 0 ? noticias[0] : null;
      this.secundarias = noticias.slice(1, 4); // Tomamos las siguientes 3 noticias como secundarias
      this.restoNoticias = noticias.slice(4); // El resto de las noticias
      console.log('Noticias obtenidas:', this.noticias);
    });

    
  }



}
