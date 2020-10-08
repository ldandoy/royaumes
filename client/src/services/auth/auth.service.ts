import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000';  // URL to web api
  private user: User = {
    id: null,
    email: "",
    username: "",
    password: "",
    level: null
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) { }

  auth = (user) => {
    return this.http.post<any>(`${this.url}/login`, user);
  }

  register = (user) => {
    return this.http.post<any>(`${this.url}/register`, user);
  }

  loggedIn = () => {
    const helper = new JwtHelperService();

    if (helper.isTokenExpired(this.getToken())) {
      this.logout();
    } else {

      const decodedToken = helper.decodeToken(this.getToken());
      // console.log(decodedToken);

      this.user.id = decodedToken.id;
      this.user.email = decodedToken.email;
      this.user.username = decodedToken.username;
      this.user.level = decodedToken.level;

      return true;
    }
  }

  logout = () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken = () => {
    return localStorage.getItem('token');
  }

  me = () => {
    return this.user;
  }
}
