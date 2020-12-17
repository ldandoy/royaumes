import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttaqueService {

  private url = 'http://localhost:3000';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  attaque = (userId, me, units, unitsOff) => {
    let datas = {me, units, unitsOff}
    return this.http.post<any>(`${this.url}/attaques/${userId}`, datas);
  }
}
