import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { MainInterfaceComponent } from './layout/main-interface/main-interface/main-interface.component';
import { SharedModule } from './shared/validators/shared/shared.module';
import { BillOperationModule } from './core-function/bill/bill-operation.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { DatePipe, DecimalPipe, LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [MessageService,

    ConfirmationService,
    DatePipe,
    TranslatePipe,
    DecimalPipe,
    LowerCasePipe,
    ],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ]
})
export class AppModule { }
