import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { Loginresponse } from '../loginresponse';
import { AppService } from '../appservice.service';
import { VegetablesService } from '../vegetables.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header implements OnInit {
  vegetables:VegetablesService;
  display:string=""
  data:String=""
  constructor(private router:Router,private service:AppService,vegetable:VegetablesService) {
    this.vegetables=vegetable;
   
   }
   logout(){
    this.router.navigate([`${'login'}`])
  }

  ngOnInit(): void {
  }

}