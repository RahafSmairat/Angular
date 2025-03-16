import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userInfo = { username: '', password: '' };
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    this.http.get<any[]>('https://67d61653286fdac89bc11c6d.mockapi.io/users').subscribe((users) => {
          const user = users.find(u =>
            u.username === this.userInfo.username && u.password === this.userInfo.password
          );

          if (user) {
            this.router.navigate(['/profile']);
          } else {
            this.errorMessage = 'Invalid username or password!';
          }
        }
      );
  }
}
