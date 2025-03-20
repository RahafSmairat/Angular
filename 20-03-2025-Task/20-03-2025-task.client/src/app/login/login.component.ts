import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: any;
  errorMessage = '';
  id = '';
  constructor(private ser: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(userInfo: any) {

    if (userInfo.email.trim() == '' || userInfo.password.trim() == '') {
      this.errorMessage = 'Please fill all feilds!';
      return;
    }

    this.ser.getUsers().subscribe((users) => {
      const user = users.find(u =>
        u.email === userInfo.email && u.password === userInfo.password
      );

      if (user) {
        this.id = user.id;
        sessionStorage.setItem('logginStatus', 'logged');
        window.location.href = `/profile/${this.id}`;
      } else {
        this.errorMessage = 'Invalid username or password!';
      }
    }
    );
  }
}
