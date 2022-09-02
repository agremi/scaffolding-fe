import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: FormControl;
  password: FormControl;
  loginControl: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.username = new FormControl<string>('', Validators.required);
    this.password = new FormControl<string>('', Validators.required);

    this.loginControl = new FormGroup({username: this.username, password: this.password});
  }
  login():void{
    console.log(this.loginControl);
  }
}
