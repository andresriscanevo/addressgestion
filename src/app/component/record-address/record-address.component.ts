import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Gaddress } from 'src/app/interfaces/gaddress';
import { GaddressService } from 'src/app/services/gaddress.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-record-address',
  templateUrl: './record-address.component.html',
  styleUrls: ['./record-address.component.scss'],
})
export class RecordAddressComponent implements OnInit {
  gaddress: Gaddress = new Gaddress();
  listaddress: Gaddress[] = [];
  selectedCountry: string;
  countries: any[];
  regions: string[];
  value: any;
  waytypename: string;
  addressform: FormGroup;
  displayBasic: boolean;
  waysTypeName: any[] = [
    { way_type_name: 'RURAL', way_type_code: 'rural', wcode: 6 },
    { way_type_name: 'Avenida Calle', way_type_code: 'avcalle', wcode: 4 },
    { way_type_name: 'Avenida Carrera', way_type_code: 'avcra', wcode: 5 },
    { way_type_name: 'Avenida', way_type_code: 'avenida', wcode: 3 },
    { way_type_name: 'Autopista', way_type_code: 'autopista', wcode: 7 },
    { way_type_name: 'Boulevard', way_type_code: 'boulevard', wcode: 11 },
    { way_type_name: 'Calle', way_type_code: 'calle', wcode: 12 },
    { way_type_name: 'Carrera', way_type_code: 'carrera', wcode: 2 },
    { way_type_name: 'Carretera', way_type_code: 'carretera', wcode: 21 },
    { way_type_name: 'Circular', way_type_code: 'circular', wcode: 27 },
    { way_type_name: 'Circunvalar', way_type_code: 'circunvalar', wcode: 26 },
    { way_type_name: 'Diagonal', way_type_code: 'diagonal', wcode: 24 },
    { way_type_name: 'Kilometro', way_type_code: 'kilometro', wcode: 22 },
    { way_type_name: 'Transversal', way_type_code: 'transversal', wcode: 25 },
    { way_type_name: 'Manzana', way_type_code: 'manzana', wcode: 23 },
    ,
  ];
  buildingsTypeUseName: any[] = [
    { building_type_use: 'Privado' },
    { building_type_use: 'Public' },
  ];
  submitted: boolean;
  constructor(
    private primengConfig: PrimeNGConfig,
    private gaddreessService: GaddressService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.countries = [
      {
        name: 'COLOMBIA',
        code: 'COL',
        num: 2,
        regions: [
          ['BARRANQUILLA'],
          ['CUNDINAMARCA'],
          ['BOYACA'],
          ['ANTIOQUIA'],
        ],
      },
      {
        name: 'ARGENTINA',
        code: 'ARG',
        num: 1,
        regions: ['BUENOS AIRES', 'CHACO', 'CORDOBA', 'CORRIENTES'],
      },
      {
        name: 'CHILE',
        code: 'CHL',
        num: 3,
        regions: ['ARICA-PARINACOTA', 'TARAPACA', 'ANTOFAGASTA', 'ATACAMA'],
      },
      {
        name: 'MEXICO',
        code: 'MEX',
        num: '4',
        regions: ['AGUASCALIENTES', 'BAJA CALIFORNIA', 'JALISCO', 'PUEBLA'],
      },
    ];
    //definicion del formgroup
    this.addressform = this.fb.group({
      way_type: new FormGroup({
        active: new FormControl({ value: false, disabled: false }),
        way_type_id: new FormControl({ value: 4, disabled: false }),
        way_type_name: new FormControl(),
        way_type_code: new FormControl(),
      }),
      building_type: new FormGroup({
        active: new FormControl({ value: false, disabled: false }),
        building_type_id: new FormControl({ value: 0, disabled: false }),
        building_type_name: new FormControl(),
        building_type_code: new FormControl(),
        building_type_use: new FormControl(),
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

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.obtaddress();
    this.updateRegions();
  }

  gotolistAddress() {
    this.router.navigate(['/listaddres']);
    Swal.fire(
      'registered address',
      `the address ${this.gaddress.way_main} has been created successfully`
    );
  }
  private obtaddress() {
    this.gaddreessService.getAddresslist().subscribe(
      (listdata) => {
        this.listaddress = listdata;
      },
      (error) => console.log(error)
    );
  }
  updateRegions() {
    console.log(this.selectedCountry);
    this.countries.forEach((country) => {
      if (country.name === this.selectedCountry) {
        this.regions = country.regions;
        console.log(this.regions);
      }
    });
  }

  onSubmit() {
    let formData = this.addressform.value;

    if (formData) {
      formData = {
        way_type: {
          active: formData.active,
          way_type_id: formData.way_type.way_type_name['wcode'],
          way_type_name: formData.way_type.way_type_name['way_type_name'],
          way_type_code: formData.way_type.way_type_name['way_type_code'],
        },
        building_type: {
          active: formData.active,
          building_type_id: formData.building_type.building_type_id,
          building_type_name: formData.building_type.building_type_name,
          building_type_code:
            formData.building_type.building_type_name.substring(0, 4),
          building_type_use:
            formData.building_type.building_type_use['building_type_use'],
        },
        place_type: {
          active: formData.active,
          place_type_id: formData.place_type.place_type_id,
          place_type_name: formData.place_type.place_type_name,
          place_type_code: formData.place_type.place_type_name.substring(0, 4),
        },
        active: formData.active,
        address_id: formData.address_id,
        way_main: formData.way_main,
        way_secondary: formData.way_secondary,
        place_name: formData.place_name,
        addr_txt:
          formData.way_type.way_type_name['way_type_name'] +
          formData.way_main +
          formData.way_secondary,
        latitude: formData.latitude,
        longitude: formData.longitude,
      };
    }
    console.log(formData);
    this.gaddreessService.createaddress(formData).subscribe(
      (data) => {
        console.log(data);
        this.gotolistAddress();
        Swal.fire(
          'Address Registered',
          `the address has been registered sucessfully`,
          `success`
        );
      },
      (err) => {
        console.log(err);

        Swal.fire('Error in the register', `${err}`, 'error');
      }
    );
  }
  displayMaximizable: boolean = false;
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
