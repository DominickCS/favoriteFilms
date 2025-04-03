import { Component } from '@angular/core';
import { FILMS } from './films';
import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-film-box',
  imports: [NgFor, CurrencyPipe, DatePipe],
  templateUrl: './film-box.component.html',
  styleUrl: './film-box.component.css',
})
export class FilmBoxComponent {
  films = FILMS;
}
