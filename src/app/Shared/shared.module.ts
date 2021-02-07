import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import { ClientSideFooterComponent } from './components/client-side-footer/client-side-footer.component';
import { ClientSideHeaderComponent } from './components/client-side-header/client-side-header.component';



@NgModule({
  declarations: [
  ClientSideFooterComponent,
  ClientSideHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports : [
      ClientSideFooterComponent,
      ClientSideHeaderComponent
    ]
})
export class SharedModule { }
