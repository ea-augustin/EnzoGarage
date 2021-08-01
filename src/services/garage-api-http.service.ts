import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import {Brand} from "../models/Brand";

@Injectable({
  providedIn: 'root'
})
export class GarageApiHttpService {

  private urlCars = 'http://localhost:8000/cars';
  private urlBrands = 'http://localhost:8000/brands';

  constructor(private httpClient: HttpClient) {
  }

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.urlBrands).pipe(retry(1), catchError(this.handleError));
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
