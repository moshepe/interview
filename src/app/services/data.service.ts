import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juke } from '../core/models/entities';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpClient) { }
  getData(): Observable<Juke> {
    return this.http.get<Juke>(`${this.url}/random`);
  }

}
