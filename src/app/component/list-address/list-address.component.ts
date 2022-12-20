import { Component } from '@angular/core';
import { Gaddress } from 'src/app/interfaces/gaddress';
import { GaddressService } from 'src/app/services/gaddress.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class ListAddressComponent {
  gaddresss: Gaddress[] ;
  gaddress:Gaddress;
  cols:any[]=[];
  constructor(private gaddressservice: GaddressService,
    private messageService: MessageService, private confirmationService: ConfirmationService) {}
  ngOnInit(): void {
    this.obtainaddress();
    
  }
  private obtainaddress() {
    this.gaddressservice.getAddresslist().subscribe((data) => {
      this.gaddresss = data;
    });
    this.cols=[
      { field: 'address_id', header: 'Id' },
      { field: 'way_main', header: 'Way main' },
      { field: 'way_secondary', header: 'Way Secondary' },
      { field: 'building', header: 'Building' },
      { field: 'place_name', header: 'Place name' },      
      { field: 'name_country', header: 'Country' },
      
    ];
    
  }
  editaddress(gaddress:Gaddress){

  }
  deletebyid(id:number){
    this.gaddressservice.deleteaddress(id).subscribe(data=>{
      console.log(data);
      this.obtainaddress();
    })
  }
  deleteaddress(gaddress:Gaddress){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + gaddress.address_id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.gaddresss = this.gaddresss.filter(val => val.address_id !== this.gaddress.address_id);
          this.gaddress = {};
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Address Deleted', life: 3000});
      }
  });

  }

}
