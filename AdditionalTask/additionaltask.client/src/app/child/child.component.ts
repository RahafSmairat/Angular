import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent{

  @Input() data!: string;  
  @ViewChild('textElement') textElement!: ElementRef;
  counter = 0;
  increment() {
    this.counter++;
  }
  constructor() {
    console.log('%cConstructor: Child Component Created', 'color: green; font-weight: bold;');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cngOnChanges: Input data changed', 'color: blue;', changes);
  }

  ngOnInit() {
    console.log('%cngOnInit: Component Initialized', 'color: orange;');
  }

  ngDoCheck() {
    console.log('%cngDoCheck: Change Detection Running', 'color: purple;', this.counter);
  }

  ngAfterContentInit() {
    console.log('%cngAfterContentInit: Content Projected', 'color: teal;');
  }

  ngAfterContentChecked() {
    console.log('%cngAfterContentChecked: Projected Content Checked', 'color: darkcyan;');
  }

  ngAfterViewInit() {
    console.log('%cngAfterViewInit: View Initialized', 'color: brown;');
    console.log('Text Content:', this.textElement.nativeElement.innerText);
  }

  ngAfterViewChecked() {
    console.log('%cngAfterViewChecked: View Checked', 'color: darkred;');
  }

  ngOnDestroy() {
    console.log('%cngOnDestroy: Component Destroyed', 'color: red; font-weight: bold;');
  }

}
