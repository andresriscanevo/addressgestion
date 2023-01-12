import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsAddressComponent } from './component/details-address/details-address.component';
import { FilterAddressComponent } from './component/filter-address/filter-address.component';
import { ListAddressComponent } from './component/list-address/list-address.component';
import { RecordAddressComponent } from './component/record-address/record-address.component';
import { UpdateAddressComponent } from './component/update-address/update-address.component';

const routes: Routes = [
  {
    path: 'listaddress',
    component: ListAddressComponent,
  },
  {
    path: 'createaddress',
    component: RecordAddressComponent,
  },
  {
    path: 'detailsaddress/:address_id',
    component: DetailsAddressComponent,
  },
  {
    path: 'updateaddress/:address_id',
    component: UpdateAddressComponent,
  },
  {
    path: 'filteraddress',
    component: FilterAddressComponent,
  },
  {
    path: '**',
    redirectTo: 'listaddress',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
