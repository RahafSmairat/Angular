import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  private categoryUrl = 'https://67d30be18bca322cc268fdac.mockapi.io/categories';
  private productUrl = 'https://67d30be18bca322cc268fdac.mockapi.io/products';
  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any[]>(this.categoryUrl);
  }

  getProducts(): Observable<any> {
    return this.http.get<any[]>(this.productUrl);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post<any>(this.categoryUrl, category);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.productUrl, product);
  }

}
