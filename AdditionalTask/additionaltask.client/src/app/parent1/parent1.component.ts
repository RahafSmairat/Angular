import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.css'
})
export class Parent1Component {
  name: any;
  recieve(data: any) {
    this.name = data;
  }
}
