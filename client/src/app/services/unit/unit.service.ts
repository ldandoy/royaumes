import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Unit } from '../../models/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private url = 'http://localhost:3000';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  list = () => {
    return this.http.get<Unit[]>(`${this.url}/units`);
  }
}
