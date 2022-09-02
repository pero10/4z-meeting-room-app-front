import { Component } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4zida-meeting-room-front';

  constructor(private router: Router,
              private authService: AuthService,
              private cookieService: CookieService) {  }

  ngOnInit() {
    if(this.cookieService.get('user')){
      const token = this.cookieService.get('user');
      this.authService.getCurrentUser(token).subscribe();
    }
  }
}
