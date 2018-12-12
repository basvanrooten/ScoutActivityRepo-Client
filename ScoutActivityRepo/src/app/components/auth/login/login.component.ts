import { Component, OnInit } from '@angular/core';
import { AuthenticationService, LoginPayload } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: LoginPayload = {
    email: '',
    password: ''
  };

  showError: boolean = false;
  error: string = '';

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/home');
    }, (err) => {
      this.showError = true;
      this.error = err.error.message;
    });

  }
}
