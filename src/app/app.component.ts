import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';
  subtittle = 'Ejemplo angular';
  numeros = [1, 2, 3, 4];
  mostrar: boolean = true;
}
