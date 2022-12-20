import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit{

  menuItems: MenuItem[]=[];
  constructor(){

  }
  ngOnInit(){
    this.menuItems=[
      {
        label:'Address',
        icon: 'pi pi-fw pi-bars',
        items:[
          {
            label:'Create Address',
            icon: 'pi pi-fw pi-check',
            routerLink:'createaddress'
          },
          {
            label:'View Address',
            icon: 'pi pi-fw pi-check',
            routerLink:'listaddress'
          },
          {
            label:'Modify Address',
            icon: 'pi pi-fw pi-user-edit'
          },
          {
            label:'Delete Address',
            icon: 'pi pi-fw pi-eraser'
          }
        ]
      },
      {
        label:'Filter',
        icon:'pi pi-fw pi-filter',
        items:[
          {
            label:'Filter Country',
            icon: 'pi pi-fw pi-sort'
          },
          {
            label:'Filter City',
            icon: 'pi pi-fw pi-sort'
          },
          {
            label:'filter Product',
            icon: 'pi pi-fw pi-sliders-h'
          },
          {
            label:'filter Service',
            icon: 'pi pi-fw pi-sliders-v'
          }
        ]
      },
      {
        label:'File',
        icon:'pi pi-fw pi-file',
        items:[
          {
            label:'Export',
            icon:'pi pi-fw pi-export'
        },
        {
          label:'Import',
          icon:'pi pi-fw pi-import'
      }
        ]
      },
    ]
  }
}
