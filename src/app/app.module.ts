import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './admin-panel/components/components.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { UserProfileComponent } from './admin-panel/user-profile/user-profile.component';
import { TableListComponent } from './admin-panel/table-list/table-list.component';
import { IconsComponent } from './admin-panel/icons/icons.component';
import { MapsComponent } from './admin-panel/maps/maps.component';

import {
  AgmCoreModule
} from '@agm/core';
import {AdminLayoutComponent} from './Shared/layouts/admin-layout/admin-layout.component';

import {ClientsideLayoutModule} from './Shared/layouts/clientside-layout/clientside-layout.module';
import {BrowserModule} from '@angular/platform-browser';
import { LoginComponent } from './admin-panel/auth/login/login.component';
import { SignupComponent } from './admin-panel/auth/signup/signup.component';
import {ClientsideLayoutComponent} from './Shared/layouts/clientside-layout/clientside-layout.component';
import {SharedModule} from './Shared/shared.module';
import { ReservationDetailsComponent } from './client-side/components/reservation-details/reservation-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ClientsideLayoutModule,
    SharedModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatDatepickerModule,
    // MatSelectModule,
    // MatInputModule,
    // MatButtonModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    SignupComponent,
    ClientsideLayoutComponent,
    ReservationDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
