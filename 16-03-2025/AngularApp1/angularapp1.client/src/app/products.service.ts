import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private categoryUrl = 'https://67d30be18bca322cc268fdac.mockapi.io/categories'; 
  private productUrl = 'https://67d30be18bca322cc268fdac.mockapi.io/products'; 

  constructor(private http: HttpClient) { }

  addCategory(data:any): Observable<any> {
    return this.http.post(this.categoryUrl, data);
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(this.productUrl, data);
  }
}
