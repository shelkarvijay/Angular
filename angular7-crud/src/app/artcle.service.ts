import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from '@angular/operator';

@Injectable({
  providedIn: 'root'
})
export class ArtcleService {

  url = 'http://localhost:3000'
  constructor(
    private http: HttpClient
  ) { }

  addUser(params) {
    return this.http.post(this.url + '/addUser', params)
  }
}
