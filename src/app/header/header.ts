import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private router: Router) {}
  ngOnInit(): void {

  }

  OnAddNewFaceSnap(): void {
    this.router.navigateByUrl('/create');
  }
}
