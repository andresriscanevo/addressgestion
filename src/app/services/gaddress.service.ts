import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gaddress } from '../interfaces/gaddress';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GaddressService {
  private api = 'http://localhost:8080';
  private apifake = 'http://localhost:3000';
  private pathpost = 'http://localhost:8080/caddress';
  constructor(private httpClient: HttpClient) {}
  // obtiene la lista de las direcciones completas tanto activas como inactivas
  getAddresslist(): Observable<Gaddress[]> {
    const path = `${this.api}/caddress/getlist`;

    return this.httpClient.get<Gaddress[]>(path);
  }
  // trae la lista de direcciones activas en la base datos
  getAddresslistactive(): Observable<Gaddress[]> {
    const path = `${this.api}/caddress/listdeleted?isDeleted=false`;

    return this.httpClient.get<Gaddress[]>(path);
  }
  // trae la lista de direcciones activas en la base datos
  getAddresslistinactive(): Observable<Gaddress[]> {
    const path = `${this.api}/caddress/listdeleted?isDeleted=true`;

    return this.httpClient.get<Gaddress[]>(path);
  }
  // registro de una nueva direccion
  createaddress(gaddress: Gaddress): Observable<Object> {
    return this.httpClient.post(this.pathpost, gaddress);
  }
  //obtiene la informacion de una direccion dado el id
  getAddressid(id: number): Observable<Gaddress> {
    const path = `${this.api}/caddress/${id}`;

    return this.httpClient.get<Gaddress>(path);
  }
  // Elimina el registro por id de la lista de direcciones
  deleteAddress(address_idn: number): Observable<Object> {
    const path = `${this.api}/caddress/delete/${address_idn}`;
    return this.httpClient.delete(path);
  }
  // actualiza la direccion por id
  updateAddress(address_idn: number, gaddress: Gaddress): Observable<Object> {
    const path = `${this.api}/caddress/delete/${address_idn}`;
    return this.httpClient.put(path, gaddress);
  }
  // obtiene la lista de regiones por pais
  getregbycountry(country_n: string): Observable<any> {
    const path = `${this.api}/caddress/regbycountry?country_name=${country_n}`;
    console.log(path);
    return this.httpClient.get<any>(path);
  }
}
