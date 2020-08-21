import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  BASE_URL = 'http://localhost:3000';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient, private router: Router) {}

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get tokenHeader() {
    var header = {
      Authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY),
    };
    return header;
  }

  login(loginData) {
    this.http.post(this.BASE_URL + '/login', loginData).subscribe((res) => {
      this.authenticate(res);
    });
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe((res) => {
      this.authenticate(res);
    });
  }

  logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }

  authenticate(res) {
    var authResponse = res;
    if (!(authResponse as any).token) {
      return;
    }
    localStorage.setItem(this.TOKEN_KEY, (authResponse as any).token);
    localStorage.setItem(this.NAME_KEY, (authResponse as any).username);
    this.router.navigate(['/']);
  }
}
