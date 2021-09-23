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
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component';
import { AddAdvertismentComponent } from './components/add-advertisment/add-advertisment.component';
import { AddGarageComponent } from './components/add-garage/add-garage.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {authInterceptorProviders, AuthInterceptorService} from "./services/authentication/auth-interceptor.service";
import {JwtModule} from "@auth0/angular-jwt";
import {AlwaysAuthGuardService} from "./services/always-auth-guard.service";
import { HeroComponent } from './components/hero/hero.component';
import { FilterComponent } from './components/filter/filter.component';

export function tokenGetter() {
  return sessionStorage.getItem("auth_token");
}

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
    HomeComponent,
    AdvertisementDetailsComponent,
    AddAdvertismentComponent,
    AddGarageComponent,
    LoginComponent,
    RegisterComponent,
    HeroComponent,
    FilterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    DataTablesModule,
    BrowserAnimationsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  providers: [AppComponent,authInterceptorProviders,
    AlwaysAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
