import { Component } from '@angular/core';
import { AddService } from '../add.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: any[] = [];

  constructor(private addService: AddService, private active: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.addService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  delete(id:any) {
    this.addService.deleteProduct(id).subscribe(() => {
      alert("Successfully deleted!")
      this.getProducts()
    })
  }
}
