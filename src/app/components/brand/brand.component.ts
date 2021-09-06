import {Component, OnInit} from '@angular/core';
import {BrandsService} from "../../services/brands.service";
import {Brand} from "../../models/Brand";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brands: Brand[] | undefined;

  constructor(public brandService: BrandsService) {

  }

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe(data => {
      this.brands = data['hydra:member'];
      console.log(this.brands);
    })
  }

}
