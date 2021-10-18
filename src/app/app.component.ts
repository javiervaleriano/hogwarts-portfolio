import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Título del proyecto
  title = 'hogwarts-portfolio';

  // Obtiene siempre el año actual
  anioActual: Number = new Date().getFullYear();

  constructor() { }
  ngOnInit() { }
}
