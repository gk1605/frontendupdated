import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  value:number=0;


    name:string="";

  constructor() { }
  changeValue(value:number,name:string){
   this.name=name;
    this.value=value-1;
    
  
    
      
  }
 
}
