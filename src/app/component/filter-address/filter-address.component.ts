import { Component, OnInit } from '@angular/core';
import { Gaddress } from 'src/app/interfaces/gaddress';
import { GaddressService } from 'src/app/services/gaddress.service';

@Component({
  selector: 'app-filter-address',
  templateUrl: './filter-address.component.html',
  styleUrls: ['./filter-address.component.scss'],
})
export class FilterAddressComponent implements OnInit {
  regsbyc: Gaddress[] = [];
  countries: any[];
  countryselected: any;
  cols: any[] = [];
  constructor(private gaddressService: GaddressService) {
    this.countries = ['COLOMBIA', 'ARGENTINA', 'CHILE', 'MEXICO'];
  }
  ngOnInit() {
    this.viewregions();
  }
  viewregions() {
    this.gaddressService
      .getregbycountry(this.countryselected)
      .subscribe((datainfo) => {
        this.regsbyc = datainfo;
        console.log(this.regsbyc);
      });
    this.cols = [
      { field: 'level1_name', header: 'Level 1' },
      { field: 'level2_name', header: 'Level 2' },
      { field: 'level3_name', header: 'Level 3' },
      { field: 'level4_name', header: 'Level 4' },
      { field: 'City', header: 'City' },
    ];
  }
}
