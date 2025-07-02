import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiasService } from '../../services/noticias.service';
import { MatDialog } from '@angular/material/dialog';
import { Noticia } from '../../interfaces/noticia.interface';
import { switchMap } from 'rxjs';
import { UtilService } from '../../services/util.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.scss']
})
export class AgregarEditarComponent implements OnInit, AfterViewInit {


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
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log('Iniciando edición de noticia...', this.router.url);
    if(!this.router.url.includes('editar')) {
      return;
    }
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.noticiaService.obtenerPorId(id))
    )
    .subscribe(noticia => {
      console.log('Noticia obtenida:', noticia);
      if (noticia?.id) {
        this.noticia = noticia;
      } else {
        this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('Componente de agregar/editar noticia inicializado');
  }

  guardarNoticia(){
    console.log('Guardando noticia:', this.noticia);
    if (this.noticia.id) {
      this.noticiaService.actualizarNoticia(this.noticia).subscribe(() => {
        this.router.navigate(['../../home'], { relativeTo: this.activatedRoute });
        this.mostrarSnakbar('Noticia actualizada correctamente');
      });
    } else {
      this.noticiaService.crearNoticia(this.noticia).subscribe(() => {
        this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
        this.mostrarSnakbar('Noticia creada correctamente');
      });
    }
  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'OK', {
      duration: 2500
    });
  }

}
