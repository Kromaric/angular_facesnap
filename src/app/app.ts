import { Component } from '@angular/core';
import {Header} from "./header/header";
import { RouterOutlet } from '@angular/router';
import { interval, Observable, map, filter, tap, of} from 'rxjs';



@Component({
  selector: 'app-root',

  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    RouterOutlet,
    Header,



  ]
})
export class App{
  interval$!: Observable<string>;

  ngOnInit() {




  }

}
