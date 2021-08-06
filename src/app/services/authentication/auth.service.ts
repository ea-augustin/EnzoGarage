import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Professional} from "../../models/Professional";

const AUTH_API = 'http://localhost:8000/'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials :Professional): Observable<any> {
    return this.http.post(AUTH_API + 'authentication_token', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user :Professional ): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username: user.username,
      password: user.password
    }, httpOptions);
  }
}
