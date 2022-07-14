import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any = FormGroup;
  users:any = [];
  constructor(private fb:FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email ])],
      password: ['', Validators.required]
    })

    this.userService.getUsers().subscribe((data:any)=>{
      this.users = data;
    })
  }

  loginSubmit(data: any){
    if(data.email){
      this.users.forEach((item:any) => {
        if(item.email === data.email && data.password === item.password){
          console.log(data.password);
          console.log(item.password);
          // localStorage.setItem("isLoggedIn",  "true");
          // this.router.navigate(['dashboard']);
        }
        else{
          localStorage.clear();
        }
      })
    }
  }

  gotToSignUp(){
    this.router.navigate(['registration'])
  }
}
