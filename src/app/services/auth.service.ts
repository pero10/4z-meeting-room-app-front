import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {LoginData} from "../LoginData";
import {UserData} from "../UserData";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = environment.url+'/api/users';
  private validatorRoute='http://localhost:8000/api/loginValidator';

  constructor(private http: HttpClient) { }

  private userData = new BehaviorSubject<null | LoginData>(null);
  currentUserData = this.userData.asObservable();

  changeUser(newUserData: UserData){
    this.userData.next(newUserData);
  }

  logout(){
    this.userData.next(null);
  }

  login(data:LoginData):Observable<LoginData>{
    const sendData = JSON.stringify(data);
    return this.http.post<LoginData>(this.validatorRoute,sendData,httpOptions);
  }

  getJwtToken(data: any):Observable<any>{
    return this.http.post<any>(this.apiUrl + '/api/apikey', data, httpOptions);
  }
}
