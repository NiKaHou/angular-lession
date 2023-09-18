import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainInterfaceComponent } from './layout/main-interface/main-interface/main-interface.component';

const routes: Routes = [
  {
    path: '',
    component: MainInterfaceComponent,
    children: [
      {
        path:'Bill',
        loadChildren: () =>
        import('src/app/core-function/bill/bill-operation.module')
        .then(m => m.BillOperationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
