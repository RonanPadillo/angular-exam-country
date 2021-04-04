import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';

const routes: Routes = [
  {
    path: "countries",
    children: [
      {
        path: "",
        component: CountriesComponent,
      },
      {
        path: "country/:name",
        component: CountryComponent,
      },
    
    ]
  },
  {
    path: "",
    redirectTo: "countries",
    pathMatch:'full',
   
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
