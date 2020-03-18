import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demo } from '../_models/demo';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private _url : string = '../assets/json/demos.json';
  constructor(private http: HttpClient) { }
  getDemos () : Observable <Demo[]> {
    return this.http.get<Demo[]>(this._url);
  }


}
