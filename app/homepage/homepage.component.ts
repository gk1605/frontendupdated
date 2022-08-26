import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { VegetablesService } from '../vegetables.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { __param } from 'tslib';
import {Vegetable} from '../vegetable';
import { AppService } from '../appservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {
  count:number=0;
  @Output() countEvent = new EventEmitter<number>();
  service:VegetablesService;
  cart:CartService;
  router:Router
  root:string="vegetableInfo";
  arr:any[]=[];
  arr1:any[]=[];
  data:any=JSON.parse(localStorage.getItem("all_users")||"")
  ps: any;
  veg:Vegetable[]=[];
  appservice:AppService;
  service1: any;
  searchtext:any;
  vegetable:VegetablesService

  
  constructor( service1:VegetablesService,cart1:CartService,router1:Router,private route:ActivatedRoute,vegservice:VegetablesService,appservice:AppService) { 
      this.service=service1;
      this.cart = cart1;
      this.router=router1;
      this.route=route;
      this.vegetable=vegservice;
      this.appservice=appservice;
  }

  sendNumber(name:string,value:string,event:any){
    this.count++;
    this.countEvent.emit(this.count);
   this.cart.changeValue(this.count+1,name);
    this.router.navigate([`${value}`]);
    event.target.disabled=true;
     this.arr.forEach(a=>{
       if(a.vegetableName==name){
         console.log(a);
        this.service.cartvegetable(a);

       }
     });

    
    
  }
  getVegetables(){
    this.service.getAllvegetables().subscribe(data=>{
      console.log(data);
      this.arr=data;
      this.arr1=data;
   
      console.log(this.arr);
      
    },error=>{
        console.log(error);
    });
    

}
getHtoL(){
  this.service.getfilter().subscribe(data=>{
    console.log(data);
    this.arr=data;
    this.arr1=data;
 
    console.log(this.arr);
    
  },error=>{
      console.log(error);
  });
  

}
getLtoH(){
  this.service.getfilter1().subscribe(data=>{
    console.log(data);
    this.arr=data;
    this.arr1=data;
 
    console.log(this.arr);
    
  },error=>{
      console.log(error);
  });
  

}
getRating(){
  this.service.getRating().subscribe(data=>{
    console.log(data);
    this.arr=data;
    this.arr1=data;
 
    console.log(this.arr);
    
  },error=>{
      console.log(error);
  });
  

}

sendvegetable(name:string){
  this.arr.forEach(a=>{
    if(name==a.vegetableName){
      this.service.receivevegetables(a);
      console.log(name);
    }
  });
  this.router.navigate([`${this.root}`]);
  
 


}
sendvegetable1(name:string){
  this.arr.forEach(a=>{
    if(name==a.name){
      this.service.getfilter();
    }
  });
  this.router.navigate([`${this.root}`]);
}
filterhightolow()
{
  this.service.getfilter();
}



  

  ngOnInit(): void {
    this.getVegetables();
   


  }

  
}