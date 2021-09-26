import { Component, OnInit } from '@angular/core';
import {Fueltype} from "../../models/Fueltype";
import {FueltypeService} from "../../services/fueltype.service";

@Component({
  selector: 'app-fueltypes',
  templateUrl: './fueltypes.component.html',
  styleUrls: ['./fueltypes.component.scss']
})
export class FueltypesComponent implements OnInit {

  fuelTypes: Fueltype[] | undefined;

  constructor(public fuelTypeService: FueltypeService) { }

  ngOnInit(): void {
    this.fuelTypeService.getAllFuelTypes().subscribe(data =>{
      this.fuelTypes = data['hydra:member'];
      console.log(this.fuelTypes);
    })


  }

}
