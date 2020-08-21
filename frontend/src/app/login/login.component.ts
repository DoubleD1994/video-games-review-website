import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public auth: AuthService) {}

  loginData = {
    username: '',
    password: '',
  };

  login() {
    this.auth.login(this.loginData);
  }
}
