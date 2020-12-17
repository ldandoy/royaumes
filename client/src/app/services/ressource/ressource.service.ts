import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Ressource} from '../../models/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  private url = 'http://localhost:3000';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  list = (kingdomId) => {
    return this.http.get<Ressource>(`${this.url}/ressources/${kingdomId}`);
  }
}
