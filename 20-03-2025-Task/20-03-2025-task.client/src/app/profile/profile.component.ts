import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private ser: UserService, private active: ActivatedRoute, private http: HttpClient) { }
  id: any;
  user: any;

  ngOnInit() {
    this.id = this.active.snapshot.paramMap.get('id');

    this.getUser(this.id);
  }

  getUser(id: any) {
    this.ser.getUsers().subscribe((data) => {
      this.user = data.find(u => u.id == this.id);
    })
  }

  /////////

  show = false; 

  edit() {
    this.show = true;
  }

  updateUser(updatedUser: any) {
    this.user = updatedUser;
    this.show = false; 
  }

}
