import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import {Brand} from "../models/Brand";

const API_URL = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class GarageApiHttpService {


  constructor(private httpClient: HttpClient) {
  }

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(API_URL + 'brands').pipe(retry(1), catchError(this.handleError));
  }

  // @ts-ignore
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
