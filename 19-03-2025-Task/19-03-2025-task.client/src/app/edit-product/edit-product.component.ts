import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService } from '../add.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
    
  product: any; 
  constructor(private route: ActivatedRoute, private ser: AddService, private router: Router) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');

    this.ser.getProducts().subscribe((data) => {
      this.product = data.find((p: any) => p.id == productId);
    });
  }

  updateProduct() {
    this.ser.updateProduct(this.product.id, this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
