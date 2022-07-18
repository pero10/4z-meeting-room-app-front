import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {LoginData} from "../../LoginData";
import {UserData} from "../../UserData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = FormGroup;
  userData: any;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });

    // this.userService.getUsers().subscribe((data:any)=>{
    //   this.users = data;
    // })
  }

  loginSubmit(data: LoginData) {
    this.userService.validateUser(data).subscribe();
    console.log(data);

    this.userData = this.userService.loginValidator().subscribe();
    // if (temp === "lgtm") {
    //   localStorage.setItem("isLoggedIn",  "true");
    //   localStorage.setItem("id", this.userData.id);
    //   localStorage.setItem("email", this.userData.email);
    //   localStorage.setItem("type",  this.userData.type);
    //
    //   this.router.navigate(['dashboard']);
    // }
  }


  gotToSignUp() {
    this.router.navigate(['registration']);
  }
}
