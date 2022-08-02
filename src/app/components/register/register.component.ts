import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:any = FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private userService: UserService) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      typeOfUser: [2]
    })
  }

  registerSubmit(user:any){
    console.log(user);
    let newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      password: user.password,
      typeOfUser: 2
    }
    this.userService.addUser(newUser).subscribe(
      (user:any) => {
        console.log(user)
      }
    );
    this.router.navigate(['login']);
    alert('Uspesno ste registrovani');
  }

  gotToLogIn() {
    this.router.navigate(['login']);
  }
}
