import { Component } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories: any[] = [];

  constructor(private addService: AddService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.addService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
