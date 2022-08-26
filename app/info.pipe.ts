import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'info'
})
export class InfoPipe implements PipeTransform {

  transform(value: any) {
    if(value.length > 10){
      let RenderVal = value.slice(0,30);
      return RenderVal+'...';
    }
    else{
      return value;
    }
  }

}
