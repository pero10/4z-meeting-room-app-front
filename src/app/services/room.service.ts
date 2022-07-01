import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import {Room} from "../Room";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:8000/api/rooms';

  constructor(private http:HttpClient) {
  }

  getRooms():Observable<Room[]>{
    return this.http.get<Room[]>(this.apiUrl);
  }
}
