import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from '../../core/api-service.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  myControl = new FormControl();

  states: any;
  countries : string[] = [];
  Country = '';
  Region = '';
  columns: number | undefined;

  

  constructor(
    private http: ApiServiceService,
    private router: Router,
    ) { }
  data: any;
  ngOnInit(): void {
    this.http.getCounties().subscribe( (country) =>{
      if (country){
        this.countries.push(...country);
        this.data = this.countries;
      }
    })


   
  }
    
  toDetail(data: any ){
      this.router.navigateByUrl('countries/country/' + data);

  }

}
