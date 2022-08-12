import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import { User } from "../User";
import {LoginData} from "../LoginData";
import {environment} from "../../environments/environment";
import {UserData} from "../UserData";
import {Reservation} from "../Reservation";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer {token}'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.url+'/api/users';
  private validatorRoute='http://localhost:8000/api/loginValidator';
  private callAttendeeRoute = 'http://localhost:8000/api/reservations/attendees';
  selectedUser = {};

  constructor(private http: HttpClient) {}

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  deleteUser(user: User):Observable<User>{
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }

  editUser(user: User):Observable<any>{
    const url = `${this.apiUrl}/${user.id}`;
    this.selectedUser = {
      "email": user.email,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "phone": user.phone
    }
    return this.http.patch<User>(this.apiUrl, this.selectedUser, httpOptions);
  }

  addUser(user: User):Observable<User>{
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }

  loginValidator():Observable<UserData>{
    return this.http.get<UserData>(this.validatorRoute, httpOptions);
  }

  callAttendee(user: User):Observable<User>{
    const url = `${this.callAttendeeRoute}/${user.id}`;
    return this.http.post<User>(url, user.id, httpOptions);
  }
}
