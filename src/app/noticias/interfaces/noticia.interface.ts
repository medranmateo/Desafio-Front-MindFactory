export interface Noticia {
    id?: number; // El ID es opcional para las nuevas noticias
    titulo: string;
    subtitulo: string;
    imagen: string;
    contenido: string;
    autor: string;
    fecha: Date;
    //categoria: string;
}
