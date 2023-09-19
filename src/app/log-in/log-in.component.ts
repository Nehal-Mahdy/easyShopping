import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {


  submitLogin(loginForm : any){
    console.log(loginForm)
    console.log(loginForm.value)
  }
}
