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

  constructor(private ser: AddService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.ser.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(data: any) {
    const newProduct = data.value;
    this.ser.addProducts(newProduct).subscribe(() => {
      this.msg = "product was added"
    });

  }
}
