import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

export const routes: Routes = [
    {
        path:'app/appointmentDetails',
        component:AppointmentDetailsComponent
    },
    {
        redirectTo:'app/appointmentDetails',
        pathMatch:'full',
        path:"**"
    }
];
