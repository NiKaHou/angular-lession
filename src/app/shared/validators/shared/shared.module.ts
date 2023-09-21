import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { LowerCasePipe } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';




const primengModules = [
  SidebarModule,
  ButtonModule,
  PanelMenuModule,
  CardModule,
  AccordionModule,
  DropdownModule,
  TableModule,
  ChipsModule,
  CalendarModule,
  MultiSelectModule,
  CheckboxModule
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...primengModules,
    TranslateModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...primengModules,
    TranslateModule,
    LowerCasePipe
  ]
})
export class SharedModule { }
