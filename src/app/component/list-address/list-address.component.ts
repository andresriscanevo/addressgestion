import { Component, DEFAULT_CURRENCY_CODE, OnInit } from '@angular/core';
import { Gaddress } from 'src/app/interfaces/gaddress';
import { GaddressService } from 'src/app/services/gaddress.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss'],
})
export class ListAddressComponent implements OnInit {
  gaddresss: Gaddress[];
  gaddress: Gaddress;
  cols: any[] = [];
  displayMaximizable: boolean;
  waytypename: string;
  constructor(
    private gaddressservice: GaddressService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.obtainaddress();
  }
  private obtainaddress() {
    this.gaddressservice.getAddresslistactive().subscribe((data) => {
      this.gaddresss = data;
      console.log(this.gaddresss);
    });

    this.cols = [
      { field: 'address_id', header: 'Id' },
      { field: 'way_main', header: 'Way main' },
      { field: 'way_secondary', header: 'Way Secondary' },
      { field: 'latitude', header: 'Latitude' },
      { field: 'longitude', header: 'Longitude' },
      { field: 'place_name', header: 'Place name' },
    ];
  }
  editAddressbyid(address_id: number) {
    console.log(address_id);
    this.router.navigate(['updateaddress', address_id]);
  }
  deleteAddressbyid(address_id: number) {
    Swal.fire({
      title: 'Are you sure deleted the address?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.gaddressservice.deleteAddress(address_id).subscribe((data) => {
          console.log(data);
          this.obtainaddress();
          Swal.fire(
            'Address deleted',
            'the address deleted successfull',
            'success'
          );
        });
      }
    });
  }
  infoAddressbyid(address_id: number) {
    console.log(address_id);
    this.router.navigate(['detailsaddress', address_id]);
    this.displayMaximizable = true;
  }
}
