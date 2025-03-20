import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() userParent: any;  
  @Output() userChild = new EventEmitter<any>(); 

  user: any = {};
  id: any;
  constructor(private http: HttpClient, private active: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.active.snapshot.paramMap.get('id');

    this.user = { ...this.userParent };  
  }

  save() {
    this.http.put(`https://67d61653286fdac89bc11c6d.mockapi.io/users/${this.id}`, this.user).subscribe(
      (updatedUser) => {
        this.userChild.emit(updatedUser);
      })
  }

  cancel() {
    this.userChild.emit(this.userParent)
  }
}
