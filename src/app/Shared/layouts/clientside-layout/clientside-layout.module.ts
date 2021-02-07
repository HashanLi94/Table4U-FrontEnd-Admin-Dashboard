import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared.module';
import {HomeComponent} from '../../../client-side/components/home/home.component';
import {RouterModule} from '@angular/router';
import {TableReservationsComponent} from '../../../client-side/components/table-reservations/table-reservations.component';
import {MatOptionModule, MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
      HomeComponent,
      TableReservationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatRippleModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    HttpClientModule,
      FormsModule,
      ReactiveFormsModule

  ] ,
  exports: [
    MatRippleModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class ClientsideLayoutModule { }
