import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm: FormGroup;

constructor(){
  this.registerForm = new FormGroup({
    name : new FormControl('',
    [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(/^([\w]{3,})+\s+([\w\s]{3,})+$/i)
    ]),
    email : new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/)
    ]),
    userName : new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^\S*$/)
    ]),
    pass : new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi)
    ]),
    confirmPass :new FormControl('',
    [
      Validators.required,
    ])
    
  })
}

submitRegister(){
  console.log(this.registerForm)
}


}
