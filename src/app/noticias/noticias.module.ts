import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { AgregarEditarComponent } from './pages/agregar-editar/agregar-editar.component';
import { HomeComponent } from './pages/home/home.component';
import { MatarialModule } from '../matarial/matarial.module';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { ListadoNoticiasComponent } from './pages/listado-noticias/listado-noticias.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { NoticiaTarjetaComponent } from './components/noticia-tarjeta/noticia-tarjeta.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NoticiaComponent,
    AgregarEditarComponent,
    HomeComponent,
    ListadoNoticiasComponent,
    ConfirmarComponent,
    NoticiaTarjetaComponent
  ],
  imports: [
    CommonModule,
    MatarialModule,
    NoticiasRoutingModule,
    FormsModule
  ]
})
export class NoticiasModule { }
