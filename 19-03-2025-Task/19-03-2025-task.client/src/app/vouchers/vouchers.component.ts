import { Component } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrl: './vouchers.component.css'
})
export class VouchersComponent {
  vouchers: any;
  constructor(private ser: AddService) { }

  ngOnInit() {
    this.getVouchers();
  }

  getVouchers() {
    this.ser.getAllVouchers().subscribe(data => {
      this.vouchers = data;
    })
  }
}
