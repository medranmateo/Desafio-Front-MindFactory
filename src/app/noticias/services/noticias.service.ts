import { Injectable } from '@angular/core';
import { Noticia } from '../interfaces/noticia.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Noticia de ejemplo',
      subtitulo: 'Subtítulo de la noticia',
      autor: 'Autor de la noticia',
      fecha: new Date(),
      contenido: 'Contenido de la noticia...',
      imagenUrl: 'https://picsum.photos/seed/1/600/300',
      categoria: 'General'
    },
    {
      id: 2,
      titulo: 'Noticia de ejemplo',
      subtitulo: 'Subtítulo de la noticia',
      autor: 'Autor de la noticia',
      fecha: new Date(),
      contenido: 'Contenido de la noticia...',
      imagenUrl: 'https://picsum.photos/seed/1/600/300',
      categoria: 'General'
    },
    {
      id: 3,
      titulo: 'Noticia de ejemplo',
      subtitulo: 'Subtítulo de la noticia',
      autor: 'Autor de la noticia',
      fecha: new Date(),
      contenido: 'Contenido de la noticia...',
      imagenUrl: 'https://picsum.photos/seed/1/600/300',
      categoria: 'General'
    },
    {
      id: 4,
      titulo: 'Noticia de ejemplo',
      subtitulo: 'Subtítulo de la noticia',
      autor: 'Autor de la noticia',
      fecha: new Date(),
      contenido: 'Contenido de la noticia...',
      imagenUrl: 'https://picsum.photos/seed/1/600/300',
      categoria: 'General'
    },
    {
      id: 5,
      titulo: 'Noticia de ejemplo',
      subtitulo: 'Subtítulo de la noticia',
      autor: 'Autor de la noticia',
      fecha: new Date(),
      contenido: 'Contenido de la noticia...',
      imagenUrl: 'https://picsum.photos/seed/1/600/300',
      categoria: 'General'
    },
    {
      id: 6,
      titulo: 'Noticia de ejemplo',
      subtitulo: 'Subtítulo de la noticia',
      autor: 'Autor de la noticia',
      fecha: new Date(),
      contenido: 'Contenido de la noticia...',
      imagenUrl: 'https://picsum.photos/seed/1/600/300',
      categoria: 'General'
    },
  ];

  private noticias$ = new BehaviorSubject<Noticia[]>([...this.noticias]);

  constructor() {}

  obtenerTodos() {
    return this.noticias$.asObservable();
  }

  obtenerPorId(id: number): Observable<Noticia> {
    return new Observable<Noticia>(observer => {
      const noticia = this.noticias.find(n => n.id === id);
      observer.next(noticia);
      observer.complete();
    });
  }

  crearNoticia(noticia: Noticia): Observable<void> {
    return new Observable<void>(observer => {
      this.noticias.push({ ...noticia, id: this.generarId() });
      this.noticias$.next([...this.noticias]);
      observer.next();
      observer.complete();
    });
  }

  actualizarNoticia(noticiaActualizada: Noticia): Observable<void> {
    return new Observable<void>(observer => {
      const index = this.noticias.findIndex(n => n.id === noticiaActualizada.id);
      if (index !== -1) {
        this.noticias[index] = { ...noticiaActualizada };
        this.noticias$.next([...this.noticias]);
      }
      observer.next();
      observer.complete();
    });
  }

  
  actualizarNoticiaSinObservable(noticiaActualizada: Noticia) {
    const index = this.noticias.findIndex(n => n.id === noticiaActualizada.id);
    if (index !== -1) {
      // Actualizamos la noticia en el array
      // Usamos el spread operator para crear un nuevo objeto con las propiedades actualizadas
      // y mantenemos el resto de las propiedades intactas
      // Esto es útil para evitar mutaciones directas del objeto original
      // y para que Angular detecte los cambios correctamente.
      this.noticias[index] = { ...noticiaActualizada };
      this.noticias$.next([...this.noticias]);
    }
  }

  eliminarNoticia(id: number): Observable<void> {
    return new Observable<void>(observer => {
      this.noticias = this.noticias.filter(n => n.id !== id);
      this.noticias$.next([...this.noticias]);
      observer.next();
      observer.complete();
    });
  }

  private generarId(): number {
    return this.noticias.length > 0 ? Math.max(...this.noticias.map(n => n.id)) + 1 : 1;
  }


}
