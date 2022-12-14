import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http: HttpClient) { }



  getCountryList(){
    let url: string = `Country/list`;
    return this.http.get(url);
  }

  getCityList(countryCode :Number){
    let url: string = `City/listbyCountryCode?countryCode=${countryCode}`;
    return this.http.get(url);
  }

  getTreatmentList(countryCode:String){
    let url: string = `Treatment/${countryCode}/list`;
    return this.http.get(url);
  }

  getSpecialityList(countryCode:String){
    let url: string = `Speciality/${countryCode}/specialityList`;
    return this.http.get(url);
  }

  getDoctorsList(payload:any){
    let url: string = `Doctor/list`;
    return this.http.post(url, payload);
  }

  getHospitalList(payload:any){
    let url: string = `Hospital/list`;
    return this.http.post(url, payload);
  }

  getIpDetails(){
    let url: string = `http://ip-api.com/json`;
    return this.http.get(url);
  }

}
