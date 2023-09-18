import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { MainInterfaceComponent } from './layout/main-interface/main-interface/main-interface.component';
import { SharedModule } from './shared/validators/shared/shared.module';
import { BillOperationModule } from './core-function/bill/bill-operation.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MainInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BillOperationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
