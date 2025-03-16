import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userInfo = { username: '', email: '', password: '' };
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) { }

  register() {
    this.http.post('https://67d61653286fdac89bc11c6d.mockapi.io/users', this.userInfo).subscribe((response) => {
          if (response) {
            this.router.navigate(['/login']);
          } else {
            this.errorMessage = 'Failed to regester!';
          }
        }
      );
  }
}
