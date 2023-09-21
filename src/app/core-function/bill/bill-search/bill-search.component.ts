import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageInfo } from '../../models/page-info';
import { DetailPageInfo } from '../../models/detail-page-info';
import { Table } from 'primeng/table';
import { TranslateService } from '@ngx-translate/core';
import { LowerCasePipe } from '@angular/common';
import { CommonDataService } from '../../service/common-data.service';
import { FacilityService } from '../../service/facility.service';
@Component({
  selector: 'app-bill-search',
  templateUrl: './bill-search.component.html',
  styleUrls: ['./bill-search.component.scss']
})
export class BillSearchComponent implements OnInit {

  searchForm: FormGroup;
  searchParams: any;

  columns: any[];
  orgIdOptions: any[];

  currencyOptions: any[];
  rateTypeOptions: any[];
  isActivatedOptions: any[];
  selectedTableColumns: any[];
  tableValue = [];
  sortInfo: any[];
  selectedRow: any;

  pageDropDownList: number[];
  statusOptions: any[];


  pageInfo: PageInfo;

  first: number;
  isHeaderLoading: boolean;
  isByOwner: number;
  isByOwner2: number;
  isByOwner3: number;

  @ViewChild('evidenceTable') dataTable!: Table;

  constructor(private fb: FormBuilder, private translateService: TranslateService, private lowerCasePipe: LowerCasePipe, private commonDataService: CommonDataService, private facilityService: FacilityService) {
    this.columns = [
      { field: 'seqNo', header: 'BillSearch.MainTable.Column.SeqNo', sort: true },
      { field: 'opexOrgId', header: 'BillSearch.MainTable.Column.OpexOrgId', sort: true },
      { field: 'billCrop', header: 'BillSearch.MainTable.Column.BillCorp', sort: true },
      { field: 'guiId', header: 'BillSearch.MainTable.Column.GUIId', sort: true },
      { field: 'guiNo', header: 'BillSearch.MainTable.Column.GUINo', sort: true },
      { field: 'billingStatus', header: 'BillSearch.MainTable.Column.Status', sort: true },
    ];


    this.searchForm = this.fb.group({
      opexOrgId: null,
      billCorp: null,
      guiId: null,
      billingNoStart: null,
      billingNoEnd: null,
      isByOwner: null,
      isByOwner2: null,
      isByOwner3: null,
    });

    this.searchParams = {
      rateType: null,
      fromCurrency: null,
      guiId: null,
      billingNoStart: null,
      billingNoEnd: null,
      isByOwner: null,
      isByOwner2: null,
      isByOwner3: null,
    };

    this.pageInfo = {
      pageSize: 100,
      pageIndex: 0,
      totalRecords: 0,
      totalPages: 0,
    };

    this.orgIdOptions = [];
    this.currencyOptions = [];
    this.rateTypeOptions = [];
    this.isActivatedOptions = [];
    this.tableValue = [];
    this.sortInfo = [];
    this.selectedTableColumns = [];
    this.statusOptions = [];

    this.pageDropDownList = [5, 10, 20, 30, 100];
    this.first = 0;
    this.isHeaderLoading = false;

  }





  async ngOnInit(): Promise<void> {

    this.isActivatedOptions = [
      { label: 'Y', value: '1' },
      { label: 'N', value: '0' }
    ];

    this.facilityService.getLetterOrgOptions('LK', '').subscribe({
      next: result => {
        this.orgIdOptions = [...result].map((x: any) => {
          return {
            label: `${x.legalEntityOUCode} - ${x.legalEntityOUName}`,
            value: x.legalEntityOUCode,
          };
        });
      }
    })

  }

  @Input() get selectedColumns(): any[] {
    return this.selectedTableColumns;
  }

  set selectedColumns(cols: any[]) {
    this.selectedTableColumns = this.columns.filter(col => cols.includes(col));
  }

  tablePageChange(event: any) {
    this.pageInfo.pageIndex = event.first / this.pageInfo.pageSize;
    this.pageInfo.pageSize = event.rows;
    // this.sendSearchRequest();
  }

  tableSort(event: any): void {
    this.sortInfo = [{ property: event.field, direction: event.order }];
    this.resetPageInfo();
    // this.sendSearchRequest();
  }

  searchClickBtn(event: any) {
    console.log('123');
    console.log
    this.isHeaderLoading = true;
  }

  resetClickBtn(event: any) {

  }

  resetPageInfo() {
    this.pageInfo = {
      pageSize: this.dataTable.rows,
      pageIndex: 0,
      totalRecords: 0,
      totalPages: 0,
    };
    this.first = 0;
  }

  chipsAdd(event: any, fromControlName: any): void {
    const value: string = event.value;
    const parsedValues: string[] = value.split('\r\n').filter(x => this.isNullOrEmpty(x) === false && x !== '\r\n');
    const formControl = this.searchForm.get(fromControlName);
    formControl?.value.splice(formControl?.value.indexOf(value));
    formControl?.setValue(formControl?.value.concat(parsedValues));
  }

  isNullOrEmpty(value: any): boolean {
    return typeof value === 'undefined' || value == null || (typeof value === 'string' && value === '');
  }


}
