import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Brand} from "../models/Brand";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BrandsService {

private apiUrl = 'http://localhost:8000/api/brands';
  constructor(private httpClient: HttpClient) {
  }

  public getAllBrands() :Observable<any>{
    return this.httpClient.get(this.apiUrl)
  }

}
