import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';


const primengModules = [
  SidebarModule,
  ButtonModule,
  PanelMenuModule
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...primengModules
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...primengModules
  ]
})
export class SharedModule { }
