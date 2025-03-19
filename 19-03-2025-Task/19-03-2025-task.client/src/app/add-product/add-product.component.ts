import { Component } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  categories: any[] = [];
  msg: string = '';
  newProduct: any;
  constructor(private ser: AddService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.ser.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(data: any) {
    this.newProduct = data;
    this.ser.addProduct(this.newProduct).subscribe(() => {
      this.msg = "A Product was added successfully!"
    })
  }
}
