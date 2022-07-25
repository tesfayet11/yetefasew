import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {ListItemComponent} from "./components/list-item/list-item.component";
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {MyItemsComponent} from "./components/my-items/my-items.component";
import {ProposeTradeComponent} from "./components/propose-trade/propose-trade.component";
import {SearchItemsComponent} from "./components/search-items/search-items.component";
import {TradeDetailsComponent} from "./components/trade-details/trade-details.component";
import {TradeHistoryComponent} from "./components/trade-history/trade-history.component";
import {AcceptRejectTradesComponent} from "./components/accept-reject-trades/accept-reject-trades.component";
import {ViewItemComponent} from "./components/view-item/view-item.component";
import {AuthGuardService} from "./services/auth/auth-guard.service";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main-menu', component: MainMenuComponent, canActivate: [AuthGuardService] },
  { path: 'list-item', component: ListItemComponent, canActivate: [AuthGuardService]  },
  { path: 'my-items', component: MyItemsComponent, canActivate: [AuthGuardService]  },
  { path: 'view-item', component: ViewItemComponent, canActivate: [AuthGuardService]  },
  { path: 'propose-trade', component: ProposeTradeComponent, canActivate: [AuthGuardService]  },
  { path: 'search-items', component: SearchItemsComponent, canActivate: [AuthGuardService]  },
  { path: 'accept-reject-trades', component: AcceptRejectTradesComponent, canActivate: [AuthGuardService]  },
  { path: 'trade-details', component: TradeDetailsComponent, canActivate: [AuthGuardService]  },
  { path: 'trade-history', component: TradeHistoryComponent, canActivate: [AuthGuardService]  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
