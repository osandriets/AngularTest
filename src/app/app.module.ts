import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { ServiceComponent } from './views/service/sevice.component';
import { NavComponent } from './views/nav/nav.component';
import { AdvertisementComponent } from './views/advertisement/advertisement.component';
import { PeopleMayKnowComponent } from './views/people-may-know/people-may-know.component';
import { FeaturedProductsComponent } from './views/featured-products/featured-products.component';
import { FeaturedCompaniesComponent } from './views/featured-companies/featured-companies.component';
import { UsersComponent } from './views/users/users.component';
import { UserSmComponent } from './views/users/user-sm/user-sm.component';
import { AlarmComponent } from './views/alarm/alarm.component';
import { SearchCompanyComponent } from './views/search-company/search-company.component';

import { MainComponent } from './page/main/main.component';
import { SupportNotLogginedComponent } from './page/support-not-loggined/support-not-loggined.component';

import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoComponent } from './views/logo/logo.component';
import {DataLoaderService} from './services/data-loader.service';
import {MessageDialogComponent} from './components/message-dialog/message-dialog.component';


const routes: Routes = [
  // {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'support/:id', component: SupportNotLogginedComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiceComponent,
    NavComponent,
    AdvertisementComponent,
    PeopleMayKnowComponent,
    FeaturedProductsComponent,
    FeaturedCompaniesComponent,
    UsersComponent,
    UserSmComponent,
    AlarmComponent,
    SearchCompanyComponent,
    MainComponent,
    SupportNotLogginedComponent,
    LogoComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

