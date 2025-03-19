import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  addCategory(data:any) {
    return this.http.post("https://67d30be18bca322cc268fdac.mockapi.io/categories", data)
  }

  addProducts(data: any) {
    return this.http.post("https://67d30be18bca322cc268fdac.mockapi.io/products", data)
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>("https://67d30be18bca322cc268fdac.mockapi.io/categories");
  }
}
