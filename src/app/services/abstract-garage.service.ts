import { Injectable } from '@angular/core';
import {Brand} from "../models/Brand";
import {GarageApiHttpService} from "./garage-api-http.service";


@Injectable({
  providedIn: 'root'
})
export abstract class AbstractGarageService {

   arrayAbstractGarageApi: Array<GarageApiHttpService>


  protected constructor() {
    this.arrayAbstractGarageApi = new Array<GarageApiHttpService>();
  }

  public getArrayAbstractGarageApi(): Array<GarageApiHttpService>{
     return this.arrayAbstractGarageApi;
  }
}
