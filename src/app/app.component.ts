import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServeService } from './serve.service';
import { HttpClientModule } from '@angular/common/http';
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
  public firstName:string=''; public lastName:string=''; public email:string=''; public password:string=''; public CB:boolean=false;
  public obj={ firstName:'',  lastName:'',  email:'', password:'',  CB:''};

  constructor(public userService:ServeService) {}
  // ngOnInit(){
  //   this.userService.getStudent().subscribe(data=>{
  //     console.log(data);
  //   })
  //   this.userService.postStudent().subscribe((data)=>{
  //     console.log(data);
      
  //   })
  // }

  
  signUp(){
    this.userService.userSignUp(this.obj).subscribe(data=>{
      console.log(data);
      
    })
  }

}
