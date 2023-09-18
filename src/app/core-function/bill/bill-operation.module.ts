import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillOperationRoutingModule } from './bill-operation-routing.module';
import { BillSearchComponent } from './bill-search/bill-search.component';
import { BillPromissionComponent } from './bill-promission/bill-promission.component';


@NgModule({
  declarations: [
    BillSearchComponent,
    BillPromissionComponent,
  ],
  imports: [
    CommonModule,
    BillOperationRoutingModule
  ]
})
export class BillOperationModule { }
