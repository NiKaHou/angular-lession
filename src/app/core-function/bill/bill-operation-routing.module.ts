import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillSearchComponent } from './bill-search/bill-search.component';
import { BillPromissionComponent } from './bill-promission/bill-promission.component';
import { BillCardComponent } from './bill-card/bill-card.component';

const routes: Routes = [
  {
    path: 'BillSearch',
    component: BillSearchComponent
  },
  {
    path: 'BillPromission',
    component: BillPromissionComponent
  },
  {
    path: 'BillCard',
    component: BillCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillOperationRoutingModule { }
