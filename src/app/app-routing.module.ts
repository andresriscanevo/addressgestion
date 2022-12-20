import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAddressComponent } from './component/list-address/list-address.component';
import { RecordAddressComponent } from './component/record-address/record-address.component';

const routes: Routes = [
  {
    path:'listaddress',
    component: ListAddressComponent
  },
  {
    path:'createaddress',
    component: RecordAddressComponent
  },
  {
    path:'**',
    redirectTo: 'listaddress'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
