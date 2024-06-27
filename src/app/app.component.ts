import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServeService } from './serve.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, CommonModule, HttpClientModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontEndConnect1';
  public firstName:string=''; public lastName:string=''; public email:string=''; public password:string=''; 
  
  constructor(public userService:ServeService, public http:HttpClient) {}

  
  signUp(){
    let obj={ firstname:this.firstName,  lastname:this.lastName,  email:this.email, password:this.password};
    //console.log(obj);
    
    this.http.post<any>('http://localhost/may-php-class/Practice/post.php', obj).subscribe(data=>{
      console.log(data);
      
    })
  }

}
