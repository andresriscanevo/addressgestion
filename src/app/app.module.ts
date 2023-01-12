import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAddressComponent } from './component/list-address/list-address.component';
import { RecordAddressComponent } from './component/record-address/record-address.component';
//importaciones de primeng para la correcta visualizacion en el front
import { TableModule } from 'primeng/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './component/menubar/menubar.component';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaddressService } from './services/gaddress.service';

import { DetailsAddressComponent } from './component/details-address/details-address.component';
import { UpdateAddressComponent } from './component/update-address/update-address.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAddressComponent,
    RecordAddressComponent,
    MenubarComponent,
    DetailsAddressComponent,
    UpdateAddressComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    DynamicDialogModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    MultiSelectModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ReactiveFormsModule,
    SliderModule,
    TableModule,
    ToastModule,
    ToolbarModule,
  ],
  providers: [GaddressService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
