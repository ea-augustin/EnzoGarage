import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../models/Advertisement";
import {AdvertisementService} from "../../services/advertisement.service";

@Component({
  selector: 'app-mileage',
  templateUrl: './mileage.component.html',
  styleUrls: ['./mileage.component.scss']
})
export class MileageComponent implements OnInit {


  mileages: Advertisement[] | undefined;

  constructor(public advertisementService:  AdvertisementService) { }

  ngOnInit(): void {

    this.advertisementService.getAllAdvertisements().subscribe(data=>{
      this.mileages = data['hydra:member'];
      console.log(this.mileages);
    })
  }
}
