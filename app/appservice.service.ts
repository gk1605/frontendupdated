import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  Observable } from 'rxjs';
import { Login } from './login';
import { Loginresponse } from './loginresponse';
import { Register } from './register';
import { Registerresponse } from './registerresponse';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  rootEndPoint:string = 'http://localhost:8080/vegetables';
  LoginEndpoint:string = this.rootEndPoint+'/user/login';
  LogoutEndpoint:string = this.rootEndPoint+'/user';
  RegisterEndPoint:String=this.rootEndPoint+'/user/Registration';
  constructor(private http:HttpClient) { }

  doLoginAction(loginDetails:Login):Observable<Loginresponse>
  {
    return this.http.post<Loginresponse>(`${this.LoginEndpoint}`,loginDetails);
  }
  dologout(){
    return this.http.get(`${this.LogoutEndpoint+'/logout'}`)
  }
  doRegistration(Registerdetails:Register):Observable<Registerresponse>
  {
    return this.http.post<Registerresponse>(`${this.RegisterEndPoint}`,Registerdetails);
  }
  
}