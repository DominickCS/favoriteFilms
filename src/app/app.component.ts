import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmBoxComponent } from './film-box/film-box.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilmBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Favorite Films';
}
