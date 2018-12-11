import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Interfaces for type checking
export interface UserDetails {
  _id: string,
  email: string,
  firstName: string,
  lastName: string,
  permissions: number,
  lastChanged: Date,
  exp: number;

}

interface TokenResponse {
  token: string,
  email: string,
  firstName: string,
  lastName: string;
}

export interface RegisterPayload {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  passwordConfirm: string;
}

export interface LoginPayload {
  email: string,
  password: string;
}


@Injectable()

export class AuthenticationService {

  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('jwt-token', token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('jwt-token');
    }

    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  // Logout
  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('jwt-token');
    this.router.navigateByUrl('/');
  }

  public register(user: RegisterPayload): Observable<any> {

    let base = this.http.post('http://localhost:3000/api/register', user);
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          console.log("Token" + data.token)
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }
  
  public login(user: LoginPayload): Observable<any> {
    let base = this.http.post('http://localhost:3000/api/login', user);
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          console.log("Token" + data.token)
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

}
