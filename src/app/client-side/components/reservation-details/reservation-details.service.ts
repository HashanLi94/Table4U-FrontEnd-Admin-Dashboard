import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationDetailsService {
  apiBaseURL: any = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  saveBookingDetails(booking) {
    return this.http.post(this.apiBaseURL + 'booking/setall', booking);
  }
}
