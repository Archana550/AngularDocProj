import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms"; 

import {PasswordChecker} from "./custom-validators/password-checker" 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'signup-reactive';
  registerFrom : FormGroup;
  submitted = false;


constructor(private formbuilder: FormBuilder){}

ngOnInit() {
  this.registerFrom = this.formbuilder.group({
    firstNmae : ["", Validators.required], 
    lastName: ["", Validators.required],
    email:["", Validators.required, Validators.email],
    password:["", Validators.required],
    confirmpassword:["", Validators.required],
    acceptTerms: [false, Validators.requiredTrue]
  },{
    validators: PasswordChecker('password','confirmpassword')
  });
}



get h(){
  return this.registerFrom.controls;
}
onSubmit(){
  this.submitted = true;
  if(this.registerFrom.invalid){
    return;
  }

  console.table(this.registerFrom.value);
  console.table(this.registerFrom);
  alert("Success Signup"+ JSON.stringify(this.registerFrom.value))

}

onReset(){
  this.submitted=false;
  this.registerFrom.reset();
}

}
