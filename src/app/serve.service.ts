import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ServeService {
  constructor(public http:HttpClient) { }

  // getStudent(){
  //   return this.http.get<any>("http://localhost/may-php-class/Practice/get.php");                       //http://localhost/may-php-class/Practice/test.php
  //  }

  // postStudent(){
  //   return this.http.post<any>("http://localhost/may-php-class/Practice/post.php",{
  //     firstname:"sola",
  //     lastname:"sade",
  //     email:"sola@gmail.com",
  //     password:"fish", 
  //   })
  // }

  public userSignUp(obj:object){
    return this.http.post<any>("http://localhost/may-php-class/Practice/post.php", obj)
  }


  }
