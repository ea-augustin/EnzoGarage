import { Component, OnInit } from '@angular/core';
import {Brand} from "../../models/Brand";
import {BrandsService} from "../../services/brands.service";
import {Model} from "../../models/Model";
import {ModelService} from "../../services/model.service";

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  models: Model[] | undefined;

  constructor(public modelsService: ModelService) {

  }

  ngOnInit(): void {
    this.modelsService.getAllModels().subscribe(data => {
      this.models = data['hydra:member'];
      console.log(this.models);
    })
  }

}
