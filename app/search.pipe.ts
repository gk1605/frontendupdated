import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], text: any): any[]{
    if(text==null||text =="")
    {
      return value;
    }
    else{
      console.log(text);
      return value.filter(n=>n.vegetableName.toLowerCase().includes(text.toLowerCase())||n.vegetableType.toLowerCase().includes(text.toLowerCase()));
    }
  }

}
