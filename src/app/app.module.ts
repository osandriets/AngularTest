import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { SeviseComponent } from './views/sevise/sevise.component';
import { NavComponent } from './views/nav/nav.component';
import { AdvertisementComponent } from './views/advertisement/advertisement.component';
import { PeopleMayKnowComponent } from './views/people-may-know/people-may-know.component';
import { FeaturedProductsComponent } from './views/featured-products/featured-products.component';
import { FeaturedCompaniesComponent } from './views/featured-companies/featured-companies.component';
import { UsersComponent } from './views/users/users.component';
import { UserSmComponent } from './views/users/user-sm/user-sm.component';
import { AlarmComponent } from './views/alarm/alarm.component';
import { SearchCompanyComponent } from './views/search-company/search-company.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeviseComponent,
    NavComponent,
    AdvertisementComponent,
    PeopleMayKnowComponent,
    FeaturedProductsComponent,
    FeaturedCompaniesComponent,
    UsersComponent,
    UserSmComponent,
    AlarmComponent,
    SearchCompanyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
