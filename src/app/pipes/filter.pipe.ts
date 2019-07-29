import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, input: string){
  //   debugger;
  //  if(input){
  //    input=input.toLowerCase();
  //    return value.filter(function(el:any){
  //      return el.toLowerCase().indexOf(input)>-1;
  //    })
  //  }
  //  return value;
  // }

  public transform(value, keys: string, term: string) {
    //debugger;
    if (!term) return value;
    return (value || []).filter(item => 
      keys.split(',').some(key =>
       item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }

}
