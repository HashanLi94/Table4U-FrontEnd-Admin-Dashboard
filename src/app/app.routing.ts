import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './Shared/layouts/admin-layout/admin-layout.component';
import {ClientsideLayoutComponent} from './Shared/layouts/clientside-layout/clientside-layout.component';
import {HomeComponent} from './client-side/components/home/home.component';
import {LoginComponent} from './admin-panel/auth/login/login.component';
import {SignupComponent} from './admin-panel/auth/signup/signup.component';
import {TableReservationsComponent} from './client-side/components/table-reservations/table-reservations.component';
import {ReservationDetailsComponent} from './client-side/components/reservation-details/reservation-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'signup',
    component : SignupComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './Shared/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },

  {
    path: '',
    component : ClientsideLayoutComponent,
    children : [
      {
        path: 'home',
        component : HomeComponent
      },
      {
        path: 'reservations',
        component : TableReservationsComponent
      },
      {
        path: 'rdetails',
        component : ReservationDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    // RouterModule.forRoot(routes, {
    //    useHash: true
    // })
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
})
export class AppRoutingModule { }
