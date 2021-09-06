import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from "../../services/advertisement.service";
import {Advertisement} from "../../models/Advertisement";

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})
export class AdvertisementsComponent implements OnInit {

  advertisements: Advertisement[] | undefined;

  constructor(public advertisementService:  AdvertisementService) { }

  ngOnInit(): void {

    this.advertisementService.getAllAdvertisements().subscribe(data=>{
      this.advertisements = data['hydra:member'];
      console.log(this.advertisements);
    })
  }

}
