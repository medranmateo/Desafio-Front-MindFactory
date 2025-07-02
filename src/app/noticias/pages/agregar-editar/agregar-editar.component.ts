import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiasService } from '../../services/noticias.service';
import { MatDialog } from '@angular/material/dialog';
import { Noticia } from '../../interfaces/noticia.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.scss']
})
export class AgregarEditarComponent implements OnInit {


  noticia: Noticia = {
    id: 0,
    titulo: '',
    subtitulo: '',
    contenido: '',
    imagenUrl: '',
    autor: '',
    fecha: new Date(),
    categoria: ''
  };

  constructor(
    private router: Router,
    private noticiaService: NoticiasService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.noticiaService.obtenerPorId(id))
    )
    .subscribe(noticia => {
      if (noticia) {
        this.noticia = noticia;
      } else {
        this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
      }
    });
  }


  guardarNoticia(){
    if (this.noticia.id) {
      this.noticiaService.actualizarNoticia(this.noticia).subscribe(() => {
        this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
      });
    } else {
      this.noticiaService.crearNoticia(this.noticia).subscribe(() => {
        this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
      });
    }
  }

}
