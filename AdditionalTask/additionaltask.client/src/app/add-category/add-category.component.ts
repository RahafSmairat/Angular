import { Component } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  newCategory: any;
  msg: string = '';
  constructor(private ser: AddService) { }

  add(data: any) {
    this.newCategory = data;
    this.ser.addCategory(data).subscribe(() => {
      this.msg = "A category was added!"
    })
  }
}
