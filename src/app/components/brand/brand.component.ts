import {Component, OnInit} from '@angular/core';
import {BrandsService} from "../../services/brands.service";
import {Brand} from "../../models/Brand";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  arrayBrands: Array<Brand>

  constructor(public brandService: BrandsService) {
    this.arrayBrands = new Array<Brand>()
  }

  ngOnInit(): void {


  }

}
