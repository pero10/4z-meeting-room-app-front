import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./services/auth.service";
import {LoginData} from "./LoginData";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser ?: LoginData | null;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.authService.currentUserData.subscribe((user) => this.currentUser = user)
    // if(!this.currentUser){
    //   this.router.navigate(['login']);
    // }else{
    //   this.router.navigate(['dashboard']);
    // }
    this.authService.currentUserData.subscribe(
      (user) => this.currentUser = user
    )
    if(!this.currentUser){
      this.router.navigate(['login']);
    }
    return true;
  }

}
