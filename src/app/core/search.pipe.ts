import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {


 transform(value: any[], Country: any, Region: any): any[] {
  
      if (value && value.length){
        return value.filter(item =>{
            if (Country && item.name.toLowerCase().indexOf(Country.toLowerCase()) === -1){
                return false;
            }
            if (Region && item.region.toLowerCase().indexOf(Region.toLowerCase()) === -1){
                return false;
            }
            return true;
        })
      }
      else{
          return value  ;
      }
 

  }

}
