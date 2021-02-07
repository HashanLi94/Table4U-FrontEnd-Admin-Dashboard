import { Component, OnInit } from '@angular/core';
import {UserprofilesService} from './userprofiles.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  administrators: any = [];

  constructor(private userprofilesService: UserprofilesService) { }

  ngOnInit() {
    this.getAllAdministrators();
  }

  getAllAdministrators() {
    return this.userprofilesService.getAllAdministrators()
        .subscribe( data => {
          this.administrators = data;
        })
  }

}


