import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfnews',
    loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasModule)
  },
  {
    path: '',
    redirectTo: '/mfnews',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
