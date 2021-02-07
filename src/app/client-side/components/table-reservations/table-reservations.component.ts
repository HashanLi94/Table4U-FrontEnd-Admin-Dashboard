import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationManagementService} from './reservation-management.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-table-reservations',
  templateUrl: './table-reservations.component.html',
  styleUrls: ['./table-reservations.component.css']
})

export class TableReservationsComponent implements OnInit {
  displayTableSelectionSection: boolean;
  availableTables: any;
  searchForm: FormGroup;
  minDate = new Date();


  tables: any = []

  timeSlots = [
    '19:00:00',
    '19:15:00',
    '19:30:00',
    '19:45:00',
    '20:00:00',
    '20:15:00',
    '20:30:00',
    '20:45:00',
    '21:00:00',
    '21:15:00',
    '21:30:00',
    '21:45:00',
    '22:00:00',
  ];



  constructor(private router: Router, private reservationManagementService: ReservationManagementService) {
  }

  ngOnInit(): void {
    this.displayTableSelectionSection = false;

    this.searchForm = new FormGroup({
      paxCount: new FormControl('', [
          Validators.required, Validators.max(10)]),
      date: new FormControl('', Validators.required),
      timeSlot: new FormControl('', Validators.required)
    });

    this.getAllTables();


    // try {
    //   const promise = this.reservationManagementService.getAvailableTables('2019-02-14', '20:30:00');
    //
    //   promise.then(response => {
    //
    //         this.availableTables = response;
    //         console.log(this.availableTables);
    //       },
    //       error => {
    //         console.log(error);
    //       });
    // } catch (exception) {
    //
    //   console.log(exception.message);
    //
    // }
  }

  getAllTables() {

    return  this.reservationManagementService.getTables()
        .subscribe( data => {
          console.log(data)
          this.tables = data;
          },
          (error: Response) => {
            console.log(error)
          }
        );
  }

  // save pax count, date, timeslot and tabelId to the seesion
  goReservationDetails(formValue, tableId) {
    this.router.navigateByUrl('/rdetails');
    const bookingDetails = localStorage.setItem('bookingDetails', JSON.stringify(formValue, tableId));
    const SelectedTableId = localStorage.setItem('tableId', JSON.stringify(tableId));
  }

  searchAvailability() {
    this.displayTableSelectionSection = true;

    // try {
    //   console.log('tessese');
    //   console.log(formValue);
    //   localStorage.setItem('bookingDetails', JSON.stringify(formValue));
    //   const promise = this.reservationManagementService.getAvailableTables('2019-02-14', '20:30:00');
    //
    //   promise.then(response => {
    //         this.availableTables = response;
    //         console.log(this.availableTables);
    //       },
    //       error => {
    //         console.log(error);
    //       });
    // } catch (exception) {
    //   console.log(exception.message);
    // }
  }

}
