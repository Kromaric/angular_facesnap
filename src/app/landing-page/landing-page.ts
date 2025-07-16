import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [FormsModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  constructor(private router: Router) {}
  userEmail: string = 'romaricyt11@gmail.com';
onContinue() {
  this.router.navigateByUrl('/facesnaps');
}

onSubmitForm(form: NgForm) :void{
  console.log(form.value);
}

}
