import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  msg : string = '';
  constructor(private productService: ProductsService) { }

  addProduct(data : any) {
    const newProduct = data.value;
    this.productService.addProduct(newProduct).subscribe(() => {
      this.msg = "product was added"
      });
    
  }
}
