import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {LecturesComponent} from "./lectures/lectures.component";
import {BreweryComponent} from "./brewery/brewery.component";
import {OnlineBankingComponent} from "./online-banking/online-banking.component";
import {BiuletynComponent} from "./biuletyn/biuletyn.component";
import {HardwareComponent} from "./hardware/hardware.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lectures', component: LecturesComponent },
  { path: 'brewrery', component: BreweryComponent },
  { path: 'banking', component: OnlineBankingComponent },
  { path: 'biuletyn', component: BiuletynComponent },
  { path: 'hardware', component: HardwareComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
