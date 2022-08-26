import { Component, OnInit } from '@angular/core';
import { VegetablesService } from '../vegetables.service';

@Component({
  selector: 'app-vegetableinfo',
  templateUrl: './vegetableinfo.component.html',
  styleUrls: ['./vegetableinfo.component.css']
})
export class VegetableInfo implements OnInit {

  vegetables:VegetablesService;

  arr:any;

  constructor(vegetable1:VegetablesService) {
    this.vegetables=vegetable1;
    this.arr=this.vegetables.selectedVegetable;
    
   }

  




   


  ngOnInit(): void {


  }

}