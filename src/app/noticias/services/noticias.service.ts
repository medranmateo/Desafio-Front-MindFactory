import { Injectable } from '@angular/core';
import { Noticia } from '../interfaces/noticia.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private baseUrl = environment.baseUrl;

  private noticias: Noticia[] = [];

  //private noticias$ = new BehaviorSubject<Noticia[]>([...this.noticias]);

  constructor(
    private http: HttpClient
  ) {}

  // obtenerTodos() {
  //   return this.noticias$.asObservable();
  // }

  // obtenerPorId(id: number): Observable<Noticia> {
  //   return new Observable<Noticia>(observer => {
  //     const noticia = this.noticias.find(n => n.id == id);
  //     observer.next(noticia);
  //     observer.complete();
  //   });
  // }

  // crearNoticia(noticia: Noticia): Observable<void> {
  //   return new Observable<void>(observer => {
  //     this.noticias.push({ ...noticia, id: this.generarId() });
  //     this.noticias$.next([...this.noticias]);
  //     observer.next();
  //     observer.complete();
  //   });
  // }

  // actualizarNoticia(noticiaActualizada: Noticia): Observable<void> {
  //   return new Observable<void>(observer => {
  //     const index = this.noticias.findIndex(n => n.id === noticiaActualizada.id);
  //     if (index !== -1) {
  //       this.noticias[index] = { ...noticiaActualizada };
  //       this.noticias$.next([...this.noticias]);
  //     }
  //     observer.next();
  //     observer.complete();
  //   });
  // }


  // eliminarNoticia(id: number): Observable<void> {
  //   return new Observable<void>(observer => {
  //     this.noticias = this.noticias.filter(n => n.id !== id);
  //     this.noticias$.next([...this.noticias]);
  //     observer.next();
  //     observer.complete();
  //   });
  // }

  // private generarId(): number {
  //   return this.noticias.length > 0 ? Math.max(...this.noticias.map(n => n.id)) + 1 : 1;
  // }


  obtenerTodos(): Observable<Noticia[]> {
    return this.http.get(this.baseUrl) as Observable<Noticia[]>;
  }

  obtenerPorId(id: string): Observable<Noticia> {
    return this.http.get<Noticia>(`${this.baseUrl}${id}`);
  }

  crearNoticia(noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(this.baseUrl, noticia);
  }

  actualizarNoticia(noticia: Noticia): Observable<Noticia> {
    return this.http.put<Noticia>(`${this.baseUrl}${noticia._id}`, noticia);
  }

  eliminarNoticia(noticia: Noticia): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}${noticia._id}`);
  }

  obtenerPorCategoria(categoria: string): Observable<Noticia[]> {
    console.log('Obteniendo noticias por categoría:', categoria);
    return this.http.get<Noticia[]>(`${this.baseUrl}categoria/${categoria}`);
  }

}
