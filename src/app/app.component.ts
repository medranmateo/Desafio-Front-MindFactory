import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private router: Router) {
    console.log('AppComponent initialized');

    // ? Esto es util para redirigir a la ruta por defecto en caso de implementar un login
    this.router.navigate(['/mfnews/home']);
  }


}
