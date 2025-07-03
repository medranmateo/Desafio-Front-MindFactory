export interface Noticia {
    _id?: string; 
    titulo: string;
    subtitulo: string;
    imagenUrl: string;
    contenido: string;
    autor: string;
    fecha?: Date;
    categoria: string;
}
