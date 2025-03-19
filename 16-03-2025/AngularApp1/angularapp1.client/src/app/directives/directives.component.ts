import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  loggedIn = true;

  books= [
    { name: "book1" }, { name: "book2" }, { name: "book3" }];

  gender = "female";

  @Input() myName!: string;

}
