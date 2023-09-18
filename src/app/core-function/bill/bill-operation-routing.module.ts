import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillSearchComponent } from './bill-search/bill-search.component';

const routes: Routes = [
  {
    path: 'BillSearch',
    component: BillSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillOperationRoutingModule { }
