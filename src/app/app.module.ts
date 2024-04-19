import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { Mypipe } from './date.pipe';
import { AppService } from './app.service';

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

@NgModule({
  declarations: [
    AppComponent,
    AppointmentDetailsComponent,
    Mypipe
  ],
  exports:[Mypipe],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes ,  { useHash: false }),
    BrowserAnimationsModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
