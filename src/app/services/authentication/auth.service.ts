import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Professional} from "../../models/Professional";
import {TokenStorageService} from "./token-storage.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import {Route} from "@angular/router";

const AUTH_API = 'http://localhost:8000/'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private tokenService: TokenStorageService, private jwtHelperService: JwtHelperService) {
  }

  login(credentials :Professional): Observable<any> {
    return this.http.post(AUTH_API + 'authentication_token', {
      username: credentials.username,
      password: credentials.password,
    }, httpOptions);
  }

  register(user :Professional ): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username: user.username,
      password: user.password
    }, httpOptions);
  }

  // this confirms if the user is connected or not
  isConnected(): boolean {
   const token  = this.tokenService.getToken()
    return !this.jwtHelperService.isTokenExpired(token);
  }
}
