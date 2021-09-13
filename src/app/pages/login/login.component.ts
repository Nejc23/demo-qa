import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() { }

  password = '';
  email = '';
  test = null;
  // password is admin

  strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');

  ngOnInit() {
    console.log('Super password is admin : admin');
    this.test = this.password;
  }

  login() {
    console.log(this.password);
    if (this.password === 'Enerdat123' || this.password === '' || this.password === 'admin') {
      alert('You passed the login screen!!')
    } else {
      console.log('Password is incorrect')
    }
  }

  isDisabled() {
    return this.password !== 'Enerdat123';
  }
}
