import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../User";
import {Reservation} from "../Reservation";
import {FormControl} from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8002/api/users';
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
    console.log(this.selectedUser);
    return this.http.patch<User>(url, this.selectedUser, httpOptions);

  }
}
