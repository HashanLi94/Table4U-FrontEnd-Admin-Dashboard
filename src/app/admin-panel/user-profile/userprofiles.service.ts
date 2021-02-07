import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserprofilesService {
  apiBaseURL: any = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllAdministrators() {
    return this.http.get(this.apiBaseURL + 'user/getall');
  }
}
