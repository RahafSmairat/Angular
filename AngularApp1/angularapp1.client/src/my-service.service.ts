import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  welcomeMessage() {
    return 'Welcome to Angular Services!';
  }
  //constructor() { }

  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  //constructor(private http: HttpClient) { }

  //// Fetch all data (GET request)
  //getAllData(): Observable<any[]> {
  //  return this.http.get<any[]>(this.apiUrl);  // Send GET request to get all data
  //}

  //// Fetch data by ID (GET request)
  //getDataById(id: number): Observable<any> {
  //  return this.http.get<any>(`${this.apiUrl}/${id}`);  // Send GET request to get data by ID
  //}

}
