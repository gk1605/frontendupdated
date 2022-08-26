import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import {VegetablesService } from '../vegetables.service';
import { Vegetable } from '../vegetable';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainPageComponent implements OnInit {

  cartcount:number;
  service:CartService;
  router:Router;
  vegetable:VegetablesService;
 constructor(service1:CartService,router1:Router,service2:VegetablesService){
   this.service=service1;
   this.router=router1;
   this.cartcount=this.service.value;
   this.vegetable=service2;
 }
 recievedNumber(value:any){
   this.cartcount=value;

 }
  
    
    
    

  
  gotoCart(cart:string){
    this.router.navigate([`${cart}`]);
    console.log("fuction triggered")
  }
 
  


  ngOnInit(): void {
  }

}