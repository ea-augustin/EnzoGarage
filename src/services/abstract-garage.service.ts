import { Injectable } from '@angular/core';
import {Brand} from "../models/Brand";


@Injectable({
  providedIn: 'root'
})
export abstract class AbstractGarageService {

   arrayAbstractGarageApi: Array<any>


  protected constructor() {
    this.arrayAbstractGarageApi = new Array<any>();
  }

  public getArrayAbstractGarageApi(): Array<any>{
     return this.arrayAbstractGarageApi;
  }
}
