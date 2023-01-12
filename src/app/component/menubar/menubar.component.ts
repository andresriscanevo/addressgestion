import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import { GaddressService } from 'src/app/services/gaddress.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  text: string;
  items: MenuItem[] = [];
  messageService: any;
  constructor(
    private httpCliente: HttpClient,
    messageService: MessageService
  ) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Address',
        icon: 'pi pi-fw pi-bars',
        items: [
          {
            label: 'Create Address',
            icon: 'pi pi-fw pi-check',
            routerLink: 'createaddress',
          },
          {
            label: 'View Address',
            icon: 'pi pi-fw pi-check',
            routerLink: 'listaddress',
          },
          {
            label: 'Modify Address',
            icon: 'pi pi-fw pi-user-edit',
          },
          {
            label: 'Delete Address',
            icon: 'pi pi-fw pi-eraser',
          },
        ],
      },
      {
        label: 'Filter',
        icon: 'pi pi-fw pi-filter',
        items: [
          {
            label: 'Filter Country',
            icon: 'pi pi-fw pi-sort',
            routerLink: 'filteraddress',
          },
          {
            label: 'Filter City',
            icon: 'pi pi-fw pi-sort',
          },
          {
            label: 'filter Product',
            icon: 'pi pi-fw pi-sliders-h',
          },
          {
            label: 'filter Service',
            icon: 'pi pi-fw pi-sliders-v',
          },
        ],
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Export',
            icon: 'pi pi-fw pi-file-export',
            command: () => this.exportfile(),
          },
          {
            label: 'Import',
            icon: 'pi pi-fw pi-file-import',
            //command: () => this.importfile(),
          },
        ],
      },
    ];
  }
  importfile(event: any) {
    const file = event.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      this.text = fileReader.result as string;
    };
    fileReader.readAsText(file);
  }
  exportfile() {
    this.httpCliente
      .get('http://localhost:8080/caddress/exportfile')
      .subscribe();
  }
}
