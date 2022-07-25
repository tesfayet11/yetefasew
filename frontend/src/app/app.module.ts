import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import {MyItemsComponent} from './components/my-items/my-items.component';
import {SearchItemsComponent} from './components/search-items/search-items.component';
import {TradeHistoryComponent} from './components/trade-history/trade-history.component';
import {ViewItemComponent} from './components/view-item/view-item.component';
import {ProposeTradeComponent} from './components/propose-trade/propose-trade.component';
import {AcceptRejectTradesComponent} from './components/accept-reject-trades/accept-reject-trades.component';
import {TradeDetailsComponent} from './components/trade-details/trade-details.component';
import {FlexModule} from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MaterialGeneralModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import {AuthInterceptorService as AuthInterceptor}  from "./services/auth/auth-interceptor.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../environments/environment";
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    MainMenuComponent,
    ListItemComponent,
    MyItemsComponent,
    SearchItemsComponent,
    TradeHistoryComponent,
    ViewItemComponent,
    ProposeTradeComponent,
    AcceptRejectTradesComponent,
    TradeDetailsComponent,
    HeaderComponent,
    SearchDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MaterialGeneralModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: JwtHelperService,
      useFactory: () => new JwtHelperService()
    },
    { provide: "BASE_API_URL", useValue: environment.apiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// MatFormFieldModule,
