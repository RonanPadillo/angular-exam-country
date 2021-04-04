import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  //Fetching all countries from URL https://restcountries.eu/rest/v2/all
  getCounties(): Observable<any>{
      const url = "https://restcountries.eu/rest/v2/all";
      return this.http.get<any>(url);
  }

  //Fetching singel countries from URL https://restcountries.eu/rest/v2/name
  getCountry(data:any): Observable<any>{
    const url = "https://restcountries.eu/rest/v2/name/" + data;
    return this.http.get<any>(url);
  }

  //Fetching border codes from URL https://restcountries.eu/rest/v2/alpha?codes=col
  getCode(data:any): Observable<any>{
    const url = "https://restcountries.eu/rest/v2/alpha?codes=" + data;
    return this.http.get<any>(url)
  }
}

