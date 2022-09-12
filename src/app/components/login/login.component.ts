import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {BehaviorSubject, Observable, observable, Subscription} from "rxjs";
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  login: any = FormGroup;

  userData: any;
  subscription?: Subscription;

  errorMessage = "";

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private cookieService: CookieService,
              private authService: AuthService,
              ){}

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  submit(data: LoginData) {
    this.authService.getJwtToken(data).subscribe(
      (token) => {
        this.cookieService.set('user', token.token, 1);
        this.authService.getCurrentUser(token.token).subscribe(
          (user) => {
            this.authService.changeUser(user);
            this.userData = user;
            this.router.navigate(['']);
          }
        );
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );

    // this.authService.login(data).subscribe(
    //   user => {
    //
    //     console.log(user);
    //
    //     if(user.status === 'lgtm'){
    //       this.authService.changeUser(user);
    //       console.log(this.authService.getJwtToken(user).subscribe());
    //       this.userData = user;
    //       this.router.navigate(['']);
    //     }
    //     else{
    //       alert(user.status);
    //     }
    //   }
    // )
 }
}
