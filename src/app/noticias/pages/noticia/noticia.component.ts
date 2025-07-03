import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Noticia } from '../../interfaces/noticia.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  noticia: Noticia | null = null;
  cargando: boolean = true;

  constructor(
    private noticiaService: NoticiasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
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
            this.cargando = false;
          } else {
            console.error('Noticia no encontrada');
            this.cargando = false;
            //this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
          }
        });
  }

  editarNoticia() {
    this.router.navigate(['../../editar', this.noticia?._id], { relativeTo: this.activatedRoute });
    // if (this.noticia && this.noticia.id) {
    // }
  }

  eliminarNoticia() {
    if (this.noticia && this.noticia._id) {
      this.dialog.open(ConfirmarComponent,{
          data: this.noticia,
          width: '400px',
          disableClose: true,
          autoFocus: false
        }).afterClosed().subscribe(result => {
          if (result) {
            this.noticiaService.eliminarNoticia(this.noticia!).subscribe(() => {
              console.log('Noticia eliminada:', this.noticia);
              this.router.navigate(['../../home'], { relativeTo: this.activatedRoute });
              this.mostrarSnakbar('Noticia eliminada correctamente');
            });
          } else {
            console.log('Eliminación cancelada');
          }
        })
    }
  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'OK', {
      duration: 2500
    });
  }

}
