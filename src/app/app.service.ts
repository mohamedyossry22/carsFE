import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getTaskDetails( id:any) {
    return this.http.get(environment.baseApi+'task/' +id)
  }

  getLanguage() {
    let lang = JSON.stringify(localStorage.getItem('lang'))

    if(lang == 'en') {
        return 'en-US'
    }else {
        return 'ar-SA'
    }
  }
}