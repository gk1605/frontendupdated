import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice.service';
import { Login } from '../login';
import { Loginresponse } from '../loginresponse';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:Login = new Login('','');
  display:string=""
  responseStatus:Loginresponse=<Loginresponse>{}
  errorResponse:any;

  constructor(private router:Router,private appService:AppService) { }
formSubmit(){
  this.data.saveData(this.data);
  
 
  console.log(this.data);
  this.appService.doLoginAction(this.data).subscribe((data)=>{
    this.responseStatus=data;
    localStorage.setItem('all_users',JSON.stringify(data));
    if(this.responseStatus.username != 'invalid'){
      console.log(localStorage.getItem('all_users'))
      this.router.navigate([`${'home'}`]);
    }
   
  }
  ,
  error=>{
    this.errorResponse=error;
    alert(this.errorResponse.error.errorMsg + "PLEASE REGISTER");
    
  }
  );

}
closeForm(){
  this.display="Please login";
}
openForm(){
  this.display="block";
}
formSubmit1(){
 <table>
  <tr>
                    <td>
                        Enter Student Name</td>
                        <td><input type="text" name="studentname"</td>
                    
                </tr>
                <tr>
                    <td>
                        Enter Student Password</td>
                        <td><input type="text" name="studentname"</td>
                    
                </tr>
                <tr>
                </table>
  }
  ,
  
}

  ngOnInit(): void {
  }

}
