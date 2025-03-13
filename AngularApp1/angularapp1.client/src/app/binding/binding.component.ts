import { Component } from '@angular/core';

import { MyService } from '../../my-service.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
  //template: `<h1>{{ message }}</h1>` //
})
export class BindingComponent {

  /////Two-Way Data Binding///
  //username = '';

  /////Event Binding///
  ////message = '';

  ////showMessage() {
  ////  this.message = 'Button Clicked!';
  ////}

  /////Property Binding///
  //imageUrl = '/assets/Pingu.jpg';

  /////String Interpolation///
  //name = 'Rahaf';

  message: string;

  constructor(private myService: MyService) {
    this.message = this.myService.welcomeMessage();
  }

  ////////////////////////////////////////////////////////////////////////////////////

  //allData: any[] = [];  // Array to hold all posts
  //singleData: any;       // Object to hold a single post by ID

  //constructor(private myService: MyService) { }

  //ngOnInit(): void {
  //  // Fetch all posts on component initialization
  //  this.myService.getAllData().subscribe(
  //    data => {
  //      this.allData = data;  // Assign fetched posts to allData property
  //    },
  //    error => {
  //      console.error('Error fetching all posts:', error);
  //    },
  //    () => {
  //      console.log('Request completed!');
  //    }
  //  );

  //  // Fetch a specific post by ID (for example, post with ID 1)
  //  this.myService.getDataById(1).subscribe(
  //    data => {
  //      this.singleData = data;  // Assign fetched post to singleData property
  //    },
  //    error => {
  //      console.error('Error fetching post by ID:', error);
  //    },
  //    () => {
  //      console.log('Request completed!');
  //    }
  //  );
  //}

}


