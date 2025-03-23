import { Component } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {
  msg: string = '';
  constructor(private ser: AddService) { }

  add(data: any) {
    this.ser.addVoucher(data).subscribe(() => {
        this.msg = "A Voucher was added successfully!"
    })
  }
}
