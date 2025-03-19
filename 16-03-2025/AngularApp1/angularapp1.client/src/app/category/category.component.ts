import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  msg: string = '';

  constructor(private productService: ProductsService) { }

  addCategory(data: any) {
    const newCategory = data.value;
    this.productService.addCategory(newCategory).subscribe(() => {
      this.msg = "category was added"
      });
  }

}
