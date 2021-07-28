import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brand} from "../models/Brand";

@Injectable({
  providedIn: 'root'
})
export class GarageApiHttpService {

  public static urlCars = 'http://localhost:8000/cars';
  public static urlBrands = 'http://localhost:8000/brands';

  constructor(private httpClient: HttpClient) {
  }

  getBrands(): Observable<Array<Brand>>{
    return this.httpClient.get<Array<Brand>>(GarageApiHttpService.urlBrands);
  }

}
