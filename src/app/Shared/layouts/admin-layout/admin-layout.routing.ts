import { Routes } from '@angular/router';
import {DashboardComponent} from '../../../admin-panel/dashboard/dashboard.component';
import {UserProfileComponent} from '../../../admin-panel/user-profile/user-profile.component';
import {TableListComponent} from '../../../admin-panel/table-list/table-list.component';
import {IconsComponent} from '../../../admin-panel/icons/icons.component';
import {MapsComponent} from '../../../admin-panel/maps/maps.component';




export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'users',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'manageBookings',          component: IconsComponent },
    { path: 'bookings',           component: MapsComponent },

];
