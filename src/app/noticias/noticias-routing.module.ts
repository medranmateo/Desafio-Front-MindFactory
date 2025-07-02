import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgregarEditarComponent } from './pages/agregar-editar/agregar-editar.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { ListadoNoticiasComponent } from './pages/listado-noticias/listado-noticias.component';


const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component: ListadoNoticiasComponent },
      { path: 'agregar', component: AgregarEditarComponent },
      { path: 'editar/:id', component: AgregarEditarComponent },
      { path: 'noticia/:id', component: NoticiaComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [RouterModule],
})
export class NoticiasRoutingModule { }
