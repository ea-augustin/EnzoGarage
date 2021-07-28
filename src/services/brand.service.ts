import {Injectable} from '@angular/core';
import {GarageApiHttpService} from "./garage-api-http.service";
import {Brand} from "../models/Brand";
import {Observable} from "rxjs";
import {AbstractGarageService} from "./abstract-garage.service";

@Injectable({
  providedIn: 'root'
})
export class BrandService extends AbstractGarageService {

  constructor(private garageApiHttpService: GarageApiHttpService) {
    super();
  }


  public findAllBrands(): void {
    this.garageApiHttpService.getBrands().subscribe((brands) => {
      this.arrayAbstractGarageApi = brands;
    });
  }

  public getArrayBrands() {
    return (this.getArrayAbstractGarageApi() as Array<Brand>);
  }


}
