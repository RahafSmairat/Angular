import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logginStatus: any;

  ngOnInit() {
    this.checkLogged();
  }

  checkLogged() {
    this.logginStatus = sessionStorage.getItem('logginStatus');
  }

  logout() {
    sessionStorage.clear();
  }
}
