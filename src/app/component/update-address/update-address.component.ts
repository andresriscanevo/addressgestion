import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gaddress } from 'src/app/interfaces/gaddress';
import { GaddressService } from 'src/app/services/gaddress.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss'],
})
export class UpdateAddressComponent implements OnInit {
  addr_id: number;
  gaddress: Gaddress = new Gaddress();
  displayBasic: boolean = false;
  selectedCountry = '';
  countries: any[];
  value: any;
  waytypename: string;
  addressform: FormGroup;
  listaddress: Gaddress[] = [];
  waysTypeName: any[] = [
    { way_type_name: 'RURAL', way_type_code: 'rural' },
    { way_type_name: 'Avenida Calle', way_type_code: 'avcalle' },
    { way_type_name: 'Avenida Carrera', way_type_code: 'avcra' },
    { way_type_name: 'Avenida', way_type_code: 'avenida' },
    { way_type_name: 'Autopista', way_type_code: 'autopista' },
    { way_type_name: 'Boulevard', way_type_code: 'boulevard' },
    { way_type_name: 'Calle', way_type_code: 'calle' },
    { way_type_name: 'Carrera', way_type_code: 'carrera' },
    { way_type_name: 'Carretera', way_type_code: 'carretera' },
    { way_type_name: 'Circular', way_type_code: 'circular' },
    { way_type_name: 'Circunvalar', way_type_code: 'circunvalar' },
    { way_type_name: 'Diagonal', way_type_code: 'diagonal' },
    { way_type_name: 'Kilometro', way_type_code: 'kilometro' },
    { way_type_name: 'Transversal', way_type_code: 'transversal' },
    { way_type_name: 'Manzana', way_type_code: 'manzana' },
    ,
  ];
  constructor(
    private gaddressService: GaddressService,
    private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.countries = [
      { name: 'COLOMBIA', key: 'COL' },
      { name: 'ARGENTINA', key: 'ARG' },
      { name: 'CHILE', key: 'CHL' },
      { name: 'MEXICO', key: 'MEX' },
    ];
    //definicion del formgroup
    this.addressform = this.fb.group({
      way_type: new FormGroup({
        active: new FormControl({ value: false, disabled: false }),
        way_type_id: new FormControl({ value: 0, disabled: false }),
        way_type_name: new FormControl(),
        way_type_code: new FormControl({
          value: 'col1',
          disabled: false,
        }),
      }),
      place_type: new FormGroup({
        active: new FormControl({ value: false, disabled: false }),
        place_type_id: new FormControl({ value: 0, disabled: false }),
        place_type_name: new FormControl(),
        place_type_code: new FormControl(),
      }),
      active: new FormControl({ value: false, disabled: false }),
      address_id: new FormControl({ value: 0, disabled: false }),
      way_main: new FormControl('', Validators.required),
      way_secondary: new FormControl('', Validators.required),
      place_name: new FormControl('', Validators.required),
      addr_txt: new FormControl(),
      latitude: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^-?\d*\.?\d*$/),
        ])
      ),
      longitude: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^-?\d*\.?\d*$/),
        ])
      ),
    });
  }
  ngOnInit(): void {
    this.addr_id = this.route.snapshot.params['address_id'];
    this.gaddressService.getAddressid(this.addr_id).subscribe(
      (data) => {
        this.gaddress = data;
      },
      (error) => console.log(error)
    );
  }
  gotolist() {
    this.router.navigate(['/listaddres']);
  }
  onSubmit() {
    this.gaddressService.updateAddress(this.addr_id, this.gaddress).subscribe(
      (data) => {
        this.gotolist();
      },
      (error) => console.log(error)
    );
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  gotocordenates() {
    window.open('https://www.coordenadas-gps.com/');
  }
  //getters de los formularios
  get way_name() {
    return this.addressform.get('way_name');
  }
}
