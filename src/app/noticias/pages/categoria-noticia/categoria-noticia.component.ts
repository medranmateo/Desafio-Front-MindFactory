import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../../interfaces/noticia.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-categoria-noticia',
  templateUrl: './categoria-noticia.component.html',
  styleUrls: ['./categoria-noticia.component.scss']
})
export class CategoriaNoticiaComponent implements OnInit {

  cargando: boolean = true;
  noticias: Noticia[] = [];
  categoria: string = '';


  constructor(
    private noticiaService: NoticiasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoria = params.get('categoria') || '';
      this.cargando = true;
      this.noticias = []; 
      this.obtenerNoticiasPorCategoria();
    });
  }

  obtenerNoticiasPorCategoria() {
    this.cargando = true;
    this.noticiaService.obtenerPorCategoria(this.categoria)
      .pipe(
        tap(() => this.cargando = false)
      )
      .subscribe({
        next: noticias => {
          this.noticias = noticias;
          console.log('Noticias obtenidas por categoría:', this.noticias);
        },
        error: error => {
          console.error('Error al obtener noticias por categoría:', error);
          this.cargando = false;
        }
      });
  }

  verDetalle(id: string) {
    console.log('ID recibido:', id);
    if (!id) {
      return;
    }
    console.log('Ver detalle de la noticia con ID:', id);
    this.router.navigate(['../../noticia', id], { relativeTo: this.activatedRoute });
  }

}
