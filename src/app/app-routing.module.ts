import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BrandComponent} from "./components/brand/brand.component";
import {AdvertisementsComponent} from "./components/advertisements/advertisements.component";
import {AdvertisementDetailsComponent} from "./components/advertisement-details/advertisement-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path: 'brands', component:BrandComponent},
  { path: 'advertisements', component:AdvertisementsComponent},
  { path: 'advertisements/:id', component:AdvertisementDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
