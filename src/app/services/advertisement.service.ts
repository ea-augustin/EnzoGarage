import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiPlatformData} from "../models/ApiPlatformData";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private apiUrl = 'http://localhost:8000/api/advertisements';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAllAdvertisements(): Observable<ApiPlatformData> {
    return this.httpClient.get<ApiPlatformData>(this.apiUrl, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  // @ts-ignore
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
