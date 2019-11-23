import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { NiceFooterComponent } from './nice-footer/nice-footer.component';
import { LecturesComponent } from './lectures/lectures.component';
import { BreweryComponent } from './brewery/brewery.component';
import {FormsModule} from "@angular/forms";
import { BankViewComponent } from './bank-view/bank-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    NiceFooterComponent,
    LecturesComponent,
    BreweryComponent,
    BankViewComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
