import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private username = new BehaviorSubject('');
  currentUserName = this.username.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  getList(){
    return this.http.get("http://jsonplaceholder.typicode.com/users");
  }

  getUserName(message: string) {
    this.username.next(message)
  }
}
