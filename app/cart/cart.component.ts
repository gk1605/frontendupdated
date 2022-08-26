import { Component, Inject, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { VegetablesService } from '../vegetables.service';
import { Router } from '@angular/router';
import { HomePageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
   service:CartService
   num:number;
   amount:number | undefined;
  
  
   vegetableService:VegetablesService;
   vegetable:any[]=[];
  
   


 

  constructor(service1:CartService,service2:VegetablesService,private router:Router) { 
    this.vegetableService=service2;
    this.service=service1;
    this.num = this.service.value;
  

    this.vegetable=this.vegetableService.vegetables;
    console.log(this.vegetable);
  

   
   
  } 
  back(){
    this.router.navigate([`${'homepage'}`])
  }

 

  
  
  


  ngOnInit(): void {
  
  }
 
}
