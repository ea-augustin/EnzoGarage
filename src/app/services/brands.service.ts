import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Brand} from "../models/Brand";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private apiUrl = 'http://localhost:8000/api/brands';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }


  getAllBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.apiUrl, this.httpOptions).pipe(retry(1), catchError(this.handleError));
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
