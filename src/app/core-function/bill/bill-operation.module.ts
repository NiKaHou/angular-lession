import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillOperationRoutingModule } from './bill-operation-routing.module';
import { BillSearchComponent } from './bill-search/bill-search.component';
import { BillPromissionComponent } from './bill-promission/bill-promission.component';
import { SharedModule } from 'src/app/shared/validators/shared/shared.module';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory, createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { BillCardComponent } from './bill-card/bill-card.component';
import { BillNewComponent } from './bill-new/bill-new.component';
import { BillTestComponent } from './bill-test/bill-test.component';


@NgModule({
  declarations: [
    BillSearchComponent,
    BillPromissionComponent,
    BillCardComponent,
    BillNewComponent,
    BillTestComponent,
  ],
  imports: [
    CommonModule,
    BillOperationRoutingModule,
    SharedModule,
    TranslateModule,
  ]
})
export class BillOperationModule { }
