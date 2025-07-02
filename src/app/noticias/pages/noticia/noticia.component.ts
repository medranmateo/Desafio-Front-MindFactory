import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Noticia } from '../../interfaces/noticia.interface';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  noticia: Noticia | null = null;

  constructor(
    private noticiaService: NoticiasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.noticiaService.obtenerPorId(id))
        )
        .subscribe(noticia => {
          if (noticia) {
            this.noticia = noticia;
            console.log('Noticia obtenida:', this.noticia);
          } else {
            //this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
          }
        });
  }

}
