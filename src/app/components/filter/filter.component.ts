import { Component, OnInit } from '@angular/core';
import {Brand} from "../../models/Brand";
import {Model} from "../../models/Model";
import {Fueltype} from "../../models/Fueltype";
import {FueltypeService} from "../../services/fueltype.service";
import {BrandsService} from "../../services/brands.service";
import {ModelService} from "../../services/model.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  brands: Brand[] | undefined;
  models: Model[] | undefined;
  fuelTypes: Fueltype[] | undefined;

  constructor(public fuelTypeService: FueltypeService,public brandService: BrandsService,public modelsService: ModelService) { }

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe(data => {
      this.brands = data['hydra:member'];
      console.log(this.brands);
    })

    this.fuelTypeService.getAllFuelTypes().subscribe(data =>{
      this.fuelTypes = data['hydra:member'];
      console.log(this.fuelTypes);
    })

    this.modelsService.getAllModels().subscribe(data => {
      this.models = data['hydra:member'];
      console.log(this.models);
    })
  }



}
