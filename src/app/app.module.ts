import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './Includes/header/header.component';
import { FooterComponent } from './Includes/footer/footer.component';
import { AdvertisementListComponent } from './includes/advertisement-list/advertisement-list.component';
import  {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrandComponent } from './brand/brand.component';
import { FueltypeComponent } from './fueltype/fueltype.component';
import { FueltypesComponent } from './fueltypes/fueltypes.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { GaragesComponent } from './garages/garages.component';
import { ModelsComponent } from './models/models.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { MileageComponent } from './mileage/mileage.component';
import { PriceComponent } from './price/price.component';
import { PricesComponent } from './prices/prices.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvertisementListComponent,
    BrandComponent,
    FueltypeComponent,
    FueltypesComponent,
    AdvertisementsComponent,
    GaragesComponent,
    ModelsComponent,
    ProfessionalsComponent,
    MileageComponent,
    PriceComponent,
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
