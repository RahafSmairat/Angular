import { Component } from '@angular/core';
import { VoucherService } from '../services/voucher.service';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrl: './vouchers.component.css'
})
export class VouchersComponent {

  vouchers: any;
  constructor(private ser: VoucherService) { }

  ngOnInit() {
    this.getVouchers();
  }

  getVouchers() {
    this.ser.getAllVouchers().subscribe(data => {
      this.vouchers = data;
    })
  }
}
