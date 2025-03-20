import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  showChild = true;
  parentData = "Initial Value";

  toggleChild() {
    this.showChild = !this.showChild;
  }
}
