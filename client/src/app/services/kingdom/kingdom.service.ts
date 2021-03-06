import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Kingdom } from '../../models/kingdom';

@Injectable({
  providedIn: 'root'
})
export class KingdomService {

  private url = 'http://localhost:3000';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  list = (user) => {
    return this.http.get<Kingdom[]>(`${this.url}/kingdoms/${user.id}`);
  }

  getById = (user, kingdomId) => {
    return this.http.get<Kingdom>(`${this.url}/kingdoms/${user.id}/${kingdomId}`);
  }
}
