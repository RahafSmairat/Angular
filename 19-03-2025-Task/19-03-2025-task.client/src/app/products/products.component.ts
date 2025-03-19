import { Component } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: any[] = [];

  constructor(private addService: AddService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.addService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
