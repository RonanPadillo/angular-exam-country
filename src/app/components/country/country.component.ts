import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ApiServiceService } from 'src/app/core/api-service.service';
import { ActivatedRoute } from '@angular/router'
import { ControlService } from 'src/app/core/control.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor(
    private location: Location,
    private api: ApiServiceService,
    private route: ActivatedRoute,
    private webapi: ControlService
  ) { }
  url: any;
  data: any;
  codeName: any;
  name: any;
  codes : string[] = [];

  ngOnInit(): void {

    this.url= this.route.snapshot.params['name'];    
    this.webapi.getDataName(this.url).subscribe(country =>{
        this.data = country;
        this.borderCode(country);
    })
  }

  back(){
    this.location.back();
  }

  borderCode(code: any){

    code.forEach((elm: any)  => {
      if(elm.borders.length > 0 ){
        let params = elm.borders.join(';'); 
        this.webapi.getCodeborder(params).subscribe((data: any)=>{
          this.codeName = data;
        })
      }
     
    });
  


  }
}

