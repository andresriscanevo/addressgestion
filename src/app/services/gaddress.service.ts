import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gaddress } from '../interfaces/gaddress';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GaddressService {
  private api='http://localhost:8080';
  private apifake= 'http://localhost:3000';
  private pathpost='http://localhost:8080/caddress'
  constructor(private httpClient:HttpClient) { }
  // obtiene la lista de las direcciones registradas 
  getAddresslist():Observable<Gaddress[]>{
    const path=`${this.api}/caddress/getlist`;
    
    return this.httpClient.get<Gaddress[]>(path);
  }
  // registro de una nueva direccion
  createaddress(gaddress:Gaddress):Observable<Object>{
    const pathp=`${this.api}/caddress/`;
    return this.httpClient.post(this.pathpost,gaddress);
  }
  getAddressid(id:number):Observable<Gaddress[]>{
    const path=`${this.api}/caddress/${id}`;
    
    return this.httpClient.get<Gaddress[]>(path);
  }
  deleteaddress(id:number):Observable<Object>{
    const path=`${this.api}/caddress/${id}`;
    return this.httpClient.delete(path);
  }

}
