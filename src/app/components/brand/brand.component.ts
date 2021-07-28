import {Component, OnInit} from '@angular/core';
import {BrandService} from "../../../services/brand.service";
import {Brand} from "../../../models/Brand";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  arrayBrands: Array<Brand>

  constructor(public brandService: BrandService) {
    this.arrayBrands = new Array<Brand>()
  }

  ngOnInit(): void {
    this.arrayBrands = this.brandService.getArrayBrands();

  }

}
