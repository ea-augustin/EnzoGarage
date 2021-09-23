import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BrandComponent} from "./components/brand/brand.component";
import {AdvertisementsComponent} from "./components/advertisements/advertisements.component";
import {AdvertisementDetailsComponent} from "./components/advertisement-details/advertisement-details.component";
import {AddAdvertismentComponent} from "./components/add-advertisment/add-advertisment.component";
import {AddGarageComponent} from "./components/add-garage/add-garage.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {AlwaysAuthGuardService} from "./services/always-auth-guard.service";


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'brands', component:BrandComponent,canActivate: [AuthGuard]},
  { path: 'advertisements', component:AdvertisementsComponent, canActivate: [AlwaysAuthGuardService]},
  { path: 'advertisements/add', component:AddAdvertismentComponent},
  { path: 'advertisements/:id', component:AdvertisementDetailsComponent},
  { path: 'garages/add', component:AddGarageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
