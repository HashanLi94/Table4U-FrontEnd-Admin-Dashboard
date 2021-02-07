import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'bookings', title: 'Bookings',  icon:'content_paste', class: '' },
    { path: 'manageBookings', title: 'Manage Bookings',  icon:'bubble_chart', class: '' },
    { path: 'table-list', title: 'Table Management',  icon:'location_on', class: '' },
    { path: 'users', title: 'User Profile',  icon:'person', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private route: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.menuItems);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

    redirectMenuItems(menuItemPath) {
        switch (menuItemPath) {
            case 'dashboard':
                this.route.navigateByUrl('admin/dashboard');
                break;
            case 'bookings':
                this.route.navigateByUrl('admin/bookings');
                break;
            case 'manageBookings':
                this.route.navigateByUrl('admin/manageBookings');
                break;
            case 'table-list':
                this.route.navigateByUrl('admin/table-list');
                break;
            case 'users':
                this.route.navigateByUrl('admin/users');
                break;
            default:
                this.route.navigateByUrl('admin/dashboard');
        }
    }
}
