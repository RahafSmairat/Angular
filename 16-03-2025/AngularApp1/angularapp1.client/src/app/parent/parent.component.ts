import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  today = new Date();

  message: string = "";

  receiveMessage(msg: string) {
    this.message = msg;
  }
}
