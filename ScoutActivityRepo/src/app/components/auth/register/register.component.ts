import { Component, OnInit } from '@angular/core';
import { RegisterPayload, AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: RegisterPayload = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirm: ''
  };

  showError: boolean = false;
  error: string = '';

  constructor(private auth: AuthenticationService, private router: Router) { }

  register() {

    // Client side check if passwords match

    if (this.credentials.password === this.credentials.passwordConfirm) {
      // Passwords match! Registering
      this.auth.register(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/login');
      }, (err) => {
        this.showError = true;
        this.error = err.error.message;
      });
    } else {
      this.showError = true;
      this.error = "Wachtwoorden komen niet overeen";
    }
  }

  ngOnInit() {
  }

}
