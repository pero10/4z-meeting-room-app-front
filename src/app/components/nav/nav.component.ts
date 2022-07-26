import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {LoginData} from "../../LoginData";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() notAdmin:boolean = true;

  currentUser?: LoginData | null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUserData.subscribe((user) => this.currentUser = user);
  }

  logOut(){
    this.authService.logout();
  }

}
