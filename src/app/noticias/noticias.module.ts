import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatarialModule } from '../matarial/matarial.module';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { ListadoNoticiasComponent } from './pages/listado-noticias/listado-noticias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importamos los componentes necesarios para el módulo de noticias
import { AgregarEditarComponent } from './pages/agregar-editar/agregar-editar.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { NoticiaTarjetaComponent } from './components/noticia-tarjeta/noticia-tarjeta.component';
import { HomeComponent } from './pages/home/home.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { CategoriaNoticiaComponent } from './pages/categoria-noticia/categoria-noticia.component';
import { CategoriaTarjetaComponent } from './components/categoria-tarjeta/categoria-tarjeta.component';



@NgModule({
  declarations: [
    NoticiaComponent,
    AgregarEditarComponent,
    HomeComponent,
    ListadoNoticiasComponent,
    ConfirmarComponent,
    NoticiaTarjetaComponent,
    SpinnerComponent,
    CategoriaNoticiaComponent,
    CategoriaTarjetaComponent
  ],
  imports: [
    CommonModule,
    MatarialModule,
    NoticiasRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class NoticiasModule { }
