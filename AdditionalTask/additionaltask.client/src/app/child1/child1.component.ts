import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  @Output() msg = new EventEmitter<string>();

  sendData() {
    this.msg.emit("Rahaf");
  }
}
