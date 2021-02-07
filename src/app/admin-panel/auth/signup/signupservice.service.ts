import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  apiBaseURL: any = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  saveNewAdministrator(admin) {
    return this.http.post(this.apiBaseURL + 'user/setall', admin);
  }

}
