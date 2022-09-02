import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: FormControl;
  password: FormControl;
  loginControl: FormGroup;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.username = new FormControl<string>('', Validators.required);
    this.password = new FormControl<string>('', Validators.required);

    this.loginControl = new FormGroup({username: this.username, password: this.password});
  }

  login(): void {
    this.loginService.login(this.loginControl.controls['username'].value, this.loginControl.controls['password'].value).subscribe(res => {
      console.log(res);
    });
  }
}
