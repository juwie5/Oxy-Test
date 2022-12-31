import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  show = false;
  sign = true;

  onBoard(){
    this.show = true;
    this.sign = false;
  }
}
