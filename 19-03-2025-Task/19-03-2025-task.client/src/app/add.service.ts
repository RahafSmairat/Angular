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

  updateCategory(id: any, category: any): Observable<any> {
    return this.http.put(`${this.categoryUrl}/${id}`, category);
  }

  updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`${this.productUrl}/${id}`, product);
  }

  //

  getAllVouchers() {
    return this.http.get<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher")
  }

  addVoucher(data:any) {
    return this.http.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher", data)
  }

  editVoucher(id: any, data: any) {
    return this.http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`, data)
  }
}
