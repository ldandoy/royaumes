import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Barrack } from '../../models/barrack';

@Injectable({
  providedIn: 'root'
})
export class BarracksService {

  private url = 'http://localhost:3000';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  list = (kingdomId) => {
    return this.http.get<Barrack[]>(`${this.url}/barracks/${kingdomId}`);
  }
}
