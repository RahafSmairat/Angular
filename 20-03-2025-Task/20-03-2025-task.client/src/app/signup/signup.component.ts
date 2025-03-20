import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  errorMessage = '';
  constructor(private ser: UserService, private router: Router) { }

  ngOnInit() {
  }

  register(user: any) {

    if (user.email.trim() == '' || user.username.trim() == '' || user.password.trim() == '') {
      this.errorMessage = 'Please fill all feilds!';
      return;
    }
    this.ser.signUp(user).subscribe((response) => {
      if (response) {
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = 'Failed to regester!';
      }
    })
  }

}
