import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationDetailsService} from './reservation-details.service';
import {ReservationManagementService} from '../table-reservations/reservation-management.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  reservationDetails: FormGroup;
  package: any
  packageDetails: any
  selectedTableId: any;
  selectedTableIdValue: any;
  tables: any = []
  price: any;
  decoPrice: any;
  fullAmount: any;

    constructor(private reservationDetailsService: ReservationDetailsService, private reservationManagementService: ReservationManagementService) { }

  ngOnInit(): void {
    // get the package details
    this.package = localStorage.getItem('bookingDetails');
    console.log(this.package);
    this.selectedTableId = localStorage.getItem('tableId');
    this.packageDetails = JSON.parse(this.package);
    console.log(this.packageDetails['paxCount']);

    this.selectedTableIdValue = JSON.parse(this.selectedTableId);

    console.log('values' +  this.packageDetails + this.selectedTableIdValue);

    this.reservationDetails = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      address : new FormControl('', Validators.required),
      number : new FormControl('+94', Validators.required),
      email : new FormControl('', [
          Validators.required, Validators.email]),
      nic : new FormControl('', Validators.required),
      additional : new FormControl('')
    });

    this.getAllTables();

  }

  onSubmitDetailsOfBookingCustomerTable() {
      this.saveBookingDetails();

  }

  saveBookingDetails() {
      const booking = {
        'paxCount' : this.packageDetails['paxCount'],
        'date' : this.packageDetails['date'],
        'time' :  this.packageDetails['timeSlot'],
        'statusId' : 1,
        'price' : this.fullAmount,
        'resTableId' : this.selectedTableIdValue,
        'customer' : {
          'firstName' : this.reservationDetails.get('firstName').value,
          'lastName' : this.reservationDetails.get('lastName').value,
          'address' : this.reservationDetails.get('address').value,
          'email' : this.reservationDetails.get('email').value,
          'contactNumber' : this.reservationDetails.get('number').value,
          'nic' : this.reservationDetails.get('nic').value,
          'additionalNotes' : this.reservationDetails.get('additional').value,
        },
      }
    return this.reservationDetailsService.saveBookingDetails(booking)
        .subscribe( data => {
          console.log('Booking  saved sucssusfully!!!!');
          },
            (error: Response) => {
          console.log(error)
            });
  }

  getAllTables() {
    return  this.reservationManagementService.getTables()
        .subscribe( data => {
              console.log(data)
              this.tables = data;
              this.tables.forEach( table => {
                if (table.tableNumber === this.selectedTableIdValue) {
                  this.price = table.price;
                  this.decoPrice = table.decoPrice;
                    console.log( 'price ' + this.price );
                    console.log( 'decoPrice ' + this.decoPrice);
                    this.fullAmount = this.decoPrice + this.price;
                }
              })
            },
            (error: Response) => {
              console.log(error)
            }
        );
  }

}
