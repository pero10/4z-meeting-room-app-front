import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {LoginData} from "../../LoginData";

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

  loginSubmit1(data: LoginData) {
    const dataFromLoginForm = JSON.stringify(data);
    const temp = this.userService.validateUser(dataFromLoginForm).subscribe();


    this.userService.loginValidator().subscribe(
      backendData => {
        console.log(backendData);
      });

    // if (this.userData.status == "lgtm") {
    //   localStorage.setItem("isLoggedIn",  "true");
    //   localStorage.setItem("id", this.userData.id);
    //   localStorage.setItem("email", this.userData.email);
    //   localStorage.setItem("type",  this.userData.type);
    //
    //   this.router.navigate(['dashboard']);
    // }
  }

  onSubmit()
  {
    this.loginSubmit1(data).subscribe((data) => {
      this.result = data

      console.log(this.result);
      console.dir(this.result);
    });

  }

  gotToSignUp() {
    this.router.navigate(['registration']);
  }
}
