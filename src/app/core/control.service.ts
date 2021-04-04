import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(
    private http: HttpClient,
    private webapi: ApiServiceService
  ) { }

  public getData(){

    return new Observable(observer =>{

      this.webapi.getCounties().subscribe((data:any)=>{
        observer.next(data)

      },error =>{
        observer.error(error);
      }
      )
    })
  }
  public getDataName(name:any){
    return new Observable(observer =>{
      this.webapi.getCountry(name).subscribe((data:any)=>{
          observer.next(data)
      },error =>{

        observer.error('Country not found')
      })
    })
  }
  public getCodeborder(codes:any){
    
    return new Observable(observer =>{
      this.webapi.getCode(codes).subscribe((data:any)=>{
          observer.next(data)
      },error =>{
        
        observer.error('Codes not found')
      }
      )
    })
  }
}
