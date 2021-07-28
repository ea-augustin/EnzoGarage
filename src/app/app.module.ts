import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import  {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrandComponent } from './components/brand/brand.component';
import { FueltypesComponent } from './components/fueltypes/fueltypes.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { GaragesComponent } from './components/garages/garages.component';
import { ModelsComponent } from './components/models/models.component';
import { MileageComponent } from './components/mileage/mileage.component';
import { PricesComponent } from './components/prices/prices.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BrandComponent,
    FueltypesComponent,
    AdvertisementsComponent,
    GaragesComponent,
    ModelsComponent,
    MileageComponent,
    PricesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    DataTablesModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
