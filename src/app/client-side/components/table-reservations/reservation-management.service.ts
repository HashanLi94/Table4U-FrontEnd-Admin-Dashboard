import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationManagementService {
    apiBaseURL: any = 'http://localhost:8080/';


  constructor(private http: HttpClient) { }

  getTables() {
      return  this.http.get(this.apiBaseURL + 'table/getall');
  }

  // getAvailableTables(date: string, timeSlot: string) {
  //   let url = 'localhost:8080/booking/getAvailableTables?sDate=${date}&timeSlot=${timeSlot}';
  //   console.log(url);
  //   return new Promise((resolve, reject) =>
  //       this.http.get(url)
  //           .subscribe(
  //               response => {
  //                 console.log("test");
  //                 resolve(response);
  //               },
  //               error => {
  //                 console.log(error);
  //                 reject(error);
  //               }
  //           )
  //   );
  // }
}
