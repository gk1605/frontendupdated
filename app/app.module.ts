import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './header/header.component';

import { MainPageComponent } from './mainpage/mainpage.component';
import { HomePageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { InfoPipe } from './info.pipe';
import { VegetableInfo } from './vegetableinfo/vegetableinfo.component';

import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { SearchPipe } from './search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';






const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainPageComponent},
  {path:'cart',component:CartComponent},
  {path:'vegetableInfo',component:VegetableInfo},
  {path:'Register',component:RegistrationComponent},
 
  
  {path:'**',component:MainPageComponent},
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    Header,
    MainPageComponent,
    HomePageComponent,
    CartComponent,
    InfoPipe,
    VegetableInfo,
    RegistrationComponent,
    SearchPipe,
    LoginComponent
   

  
  
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [HomePageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }