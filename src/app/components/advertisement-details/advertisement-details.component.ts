import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.scss']
})
export class AdvertisementDetailsComponent implements OnInit {
  // id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.paramMap.get('id');
  }

}
