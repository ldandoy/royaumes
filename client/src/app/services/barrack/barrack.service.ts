import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Unit } from '../../models/unit';

@Injectable({
  providedIn: 'root'
})
export class BarrackService {

  private url = 'http://localhost:3000';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  list = (kingdomId) => {
    return this.http.get<Unit[]>(`${this.url}/barracks/${kingdomId}`);
  }

  recru = (kingdomId, units) => {
    return this.http.post<any>(`${this.url}/barracks/${kingdomId}/recru`, units);
  }
}
