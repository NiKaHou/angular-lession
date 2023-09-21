import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, AfterViewInit, OnDestroy {

  sidebarVisible: boolean;
  items: MenuItem[];

  public toggleMenuBar: BehaviorSubject<any>;

  constructor() {
    this.sidebarVisible = true;
    this.items = [];
    this.toggleMenuBar = new BehaviorSubject<any>(null);
  }
  ngOnDestroy(): void {
    this.toggleMenuBar = new BehaviorSubject<any>(null);
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.items = [
      {
      label: 'File',
      icon:'pi pi-fw pi-file',
      items: [
        {
        label: 'BillSearch',
        icon:'pi pi-fw pi-bookmark',
        routerLink:'/Bill/BillSearch'
        },
        {
        label: 'billPromission',
        icon:'pi pi-fw pi-video',
        routerLink:'/Bill/BillPromission'
        }
      ]
      },
      {
      label: 'Edit',
      icon:'pi pi-fw pi-pencil',
      items: [
          {
              label: 'Left',
              icon:'pi pi-fw pi-align-left',
              routerLink:'/Bill/BillCard'
          },
          {
              label: 'Right',
              icon:'pi pi-fw pi-align-right'
          },
          {
              label: 'Center',
              icon:'pi pi-fw pi-align-center'
          },
          {
              label: 'Justify',
              icon:'pi pi-fw pi-align-justify'
          }
      ]
      },
      {
      label: 'Users',
      icon:'pi pi-fw pi-user',
      items: [
          {
              label: 'New',
              icon:'pi pi-fw pi-user-plus',

          },
          {
              label: 'Delete',
              icon:'pi pi-fw pi-user-minus',
          },
          {
              label: 'Search',
              icon:'pi pi-fw pi-users',
              items: [
                  {
                  label: 'Filter',
                  icon:'pi pi-fw pi-filter',
                  items: [
                      {
                          label: 'Print',
                          icon:'pi pi-fw pi-print'
                      }
                  ]
                  },
                  {
                  icon:'pi pi-fw pi-bars',
                  label: 'List'
                  }
              ]
          }
      ]
      },
      {
      label: 'Events',
      icon:'pi pi-fw pi-calendar',
      items: [
          {
              label: 'Edit',
              icon:'pi pi-fw pi-pencil',
              items: [
                  {
                  label: 'Save',
                  icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                  label: 'Delete',
                  icon:'pi pi-fw pi-calendar-minus'
                  }
              ]
          },
          {
              label: 'Archieve',
              icon:'pi pi-fw pi-calendar-times',
              items: [
                  {
                  label: 'Remove',
                  icon:'pi pi-fw pi-calendar-minus'
                  }
              ]
          }
      ]
      }
  ]
  }

}
