import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Gaddress } from 'src/app/interfaces/gaddress';
import { GaddressService } from 'src/app/services/gaddress.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-record-address',
  templateUrl: './record-address.component.html',
  styleUrls: ['./record-address.component.scss'],
})
export class RecordAddressComponent implements OnInit {
  gaddress: Gaddress =new Gaddress();
  listaddress:Gaddress[]=[];
  selectedCountry='';
  countries: any[];
  value:any;
  selectedwaysTypeName:any=null;
  formgroup:FormGroup=new FormGroup({});
  displayBasic: boolean;
  waysTypeName:any[]=[
    { name: 'RURAL', key: 'rural' },
    { name: 'Avenida Calle', key: 'avcalle' },
    { name: 'Avenida Carrera', key: 'avcra' },
    { name: 'Avenida', key: 'avenida' },
    { name: 'Autopista', key: 'autopista' },
    { name: 'Boulevard', key: 'boulevard' },
    { name: 'Calle', key: 'calle' },
    { name: 'Carrera', key: 'carrera' },
    { name: 'Carretera', key: 'carretera' },
    { name: 'Circular', key: 'circular' },
    { name: 'Circunvalar', key: 'circunvalar' },
    { name: 'Diagonal', key: 'diagonal' },
    { name: 'Kilometro', key: 'kilometro' },
    { name: 'Transversal', key: 'transversal' },
    { name: 'Manzana', key: 'manzana' },
    ,
  ]
  constructor(
    private primengConfig: PrimeNGConfig,
    private gaddreessService: GaddressService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
    
  ) {
    this.countries= [
      { name: 'COLOMBIA', key: 'COL' },
      { name: 'ARGENTINA', key: 'ARG' },
      { name: 'CHILE', key: 'CHL' },
      { name: 'MEXICO', key: 'MEX' },
    ];
  }
  registeraddress=this.fb.group({
    regionlevel1:['',[Validators.required]],
    way_main:['',Validators.required],
    way_secondary:['',Validators.required],
    place_type_name:['',Validators.required],
    place_name:['',Validators.required],
  });
  
  ngOnInit() {
    this.primengConfig.ripple = true;
    
    this.selectedCountry = this.countries[1];
    this.selectedwaysTypeName=this.waysTypeName[1];
    this.obtaddress();
  }
 
  recordaddress(){
    this.gaddreessService.createaddress(this.gaddress).subscribe(data=>{
      console.log(data);
    })
  }
  private obtaddress(){
    this.gaddreessService.getAddresslist().subscribe((listdata)=>{
      this.listaddress=listdata;
    })
  }
  onSubmit() {
    this.gaddreessService.createaddress(this.gaddress).subscribe((response) => {
      console.log(response);
    },error => console.log(error));
  }
  displayMaximizable: boolean = false;
  showBasicDialog() {
    this.displayBasic = true;
  }
  gotocordenates(){
    window.open("https://www.coordenadas-gps.com/");


  }
}
