import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {LoginData} from "../LoginData";
import {UserData} from "../UserData";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CookieService} from "ngx-cookie-service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private url = environment.url;
  private apiUrl = environment.url + '/api/users';
  private validatorRoute = 'http://localhost:8000/api/loginValidator';
  private apikeyUrl = 'http://localhost:8000/api/login_check';

  constructor(private http: HttpClient,
              private cookieService: CookieService
  ) {
  }

  private userData = new BehaviorSubject<null | LoginData>(null);
  currentUserData = this.userData.asObservable();

  changeUser(newUserData: UserData) {
    this.userData.next(newUserData);
  }

  logout() {
    this.cookieService.delete('user');
    this.userData.next(null);
  }

  login(data: LoginData): Observable<LoginData> {
    const sendData = JSON.stringify(data);
    return this.http.post<LoginData>(this.validatorRoute, sendData, httpOptions);
  }

  getJwtToken(data: any): Observable<any> {
    return this.http.post<any>(this.apikeyUrl, data, httpOptions);
  }

  getCurrentUser(token: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    return this.http.get<LoginData>(this.url + '/api/me', httpOptions).pipe(
      tap((user) => {
        this.userData.next(user);
        console.log(user);
      })
    );

  }

}
