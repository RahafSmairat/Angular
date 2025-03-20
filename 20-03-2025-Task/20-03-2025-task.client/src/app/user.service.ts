import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signUp(data: any) {
    return this.http.post('https://67d61653286fdac89bc11c6d.mockapi.io/users', data);
  }

  getUsers() {
    return this.http.get<any[]>('https://67d61653286fdac89bc11c6d.mockapi.io/users')
  }

//  logIn()
}
