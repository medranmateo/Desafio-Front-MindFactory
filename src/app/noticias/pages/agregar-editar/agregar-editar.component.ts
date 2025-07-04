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

  cargando: boolean = true;

  noticia: Noticia = {
    titulo: '',
    subtitulo: '',
    contenido: '',
    imagenUrl: '',
    autor: '',
    //fecha: new Date(),
    categoria: ''
  };

  categorias: string[] = ['Politica', 'Deportes', 'Tecnologia', 'Economia', 'Internacional'];


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
      this.cargando = false;
      return;
    }
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.noticiaService.obtenerPorId(id))
    )
    .subscribe(noticia => {
      console.log('Noticia obtenida:', noticia);
      if (noticia?._id) {
        this.noticia = noticia;
        this.cargando = false;
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
    if (this.noticia._id) {
      console.log('Actualizando noticia con ID:', this.noticia._id);
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
