import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  get = (userId) => {
    return this.http.get<User>(`${this.url}/users/${userId}`);
  }
}
