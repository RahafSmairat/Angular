import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  constructor(private http: HttpClient) { }

  getAllVouchers() {
    return this.http.get<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher")
  }
}
