import { Component } from '@angular/core';
import {Header} from "./header/header";
import { RouterOutlet } from '@angular/router';
import { interval, Observable, map, filter, tap, of} from 'rxjs';
import  { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',

  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    RouterOutlet,
    Header,
    AsyncPipe

  ]
})
export class App{
  interval$!: Observable<string>;

  ngOnInit() {

    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map((value: number) => value % 2 === 0 ?
       `je suis ${value} et je suis pair` :
       `je suis ${value} et je suis impair`
      ),
      tap(text => this.logger(text))
    );



  }
  logger(text:string) {
    console.log(`Log: ${text}`);
  }
}
