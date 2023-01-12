import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Gaddress } from 'src/app/interfaces/gaddress';
import { GaddressService } from 'src/app/services/gaddress.service';

@Component({
  selector: 'app-details-address',
  templateUrl: './details-address.component.html',
  styleUrls: ['./details-address.component.scss'],
})
export class DetailsAddressComponent implements OnInit {
  adr_id: number;
  waytypename: string;
  gaddress: Gaddress;
  gaddresses: Gaddress[];
  displayMaximizable: boolean;
  constructor(
    private route: ActivatedRoute,
    private gaddressService: GaddressService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.adr_id = this.route.snapshot.params['address_id'];

    this.gaddress = new Gaddress();
    if (this.adr_id) {
      this.gaddressService.getAddressid(this.adr_id).subscribe((data) => {
        this.gaddress = data;
        this.waytypename = this.gaddress.way_type.way_type_name;
      });
    }
  }

  gotolist() {
    this.router.navigate(['/listaddres']);

    console.log(this.gaddress);
  }
}
