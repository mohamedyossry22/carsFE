import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrl: './appointment-details.component.scss'
})
export class AppointmentDetailsComponent {
  lang:string = "ar"
  id:string= ""
  arabic = {

  }
  details:any 
  constructor(private service:AppService , private route:ActivatedRoute) {
    if("lang" in localStorage) {
      this.lang = JSON.stringify(localStorage.getItem("lang"))
    }else {
      localStorage.setItem("lang" ,this.lang)
    }
    this.route.queryParams.subscribe(res => {
      this.id = res['aptRefNo']
      this.getData(this.id)
    })
  }

  changeLang(lang:string) {
    
  }

  getData(id:any) {
    this.service.getTaskDetails(id).subscribe((res:any) => {
      this.details = res.tasks
      
    })
  }
}
