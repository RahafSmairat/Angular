import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService } from '../add.service';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {
  voucher: any;

  constructor(private route: ActivatedRoute, private ser: AddService, private router: Router) { }

  ngOnInit() {
    const voucherId = this.route.snapshot.paramMap.get('id');

    this.ser.getAllVouchers().subscribe((data) => {
      this.voucher = data.find((c: any) => c.id == voucherId);
    });
  }

  update() {
    this.ser.editVoucher(this.voucher.id, this.voucher).subscribe(() => {
      this.router.navigate(['/vouchers']);
    });
  }
}
