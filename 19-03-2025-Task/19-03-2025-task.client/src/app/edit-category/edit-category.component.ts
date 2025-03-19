import { Component } from '@angular/core';
import { AddService } from '../add.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {
  category: any;

  constructor(private route: ActivatedRoute, private ser: AddService, private router: Router) { }

  ngOnInit() {
    const categoryId = this.route.snapshot.paramMap.get('id');

    this.ser.getCategories().subscribe((data) => {
      this.category = data.find((c: any) => c.id == categoryId);
    });
  }

  updateCategory() {
    this.ser.updateCategory(this.category.id, this.category).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }
}
