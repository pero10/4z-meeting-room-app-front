import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../Room";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = environment.url;

  constructor(private http:HttpClient) {
  }

  addNewRoom(room:Room):Observable<Room> {
    const url = this.apiUrl+'/api/rooms'
    return this.http.post<Room>(url,room,httpOptions);
  }

  getRooms():Observable<Room[]>{
    return this.http.get<Room[]>(this.apiUrl+'/api/rooms');
  }

  deleteRoom(room: Room):Observable<Room>{
    const url = `${this.apiUrl}/api/rooms/${room.id}`;
    return this.http.delete<Room>(url);
  }

  editRoom(room: Room):Observable<Room>{
    const url = `${this.apiUrl}/api/rooms/${room.id}`;
    return this.http.patch<Room>(url,room,httpOptions);
  }
}
