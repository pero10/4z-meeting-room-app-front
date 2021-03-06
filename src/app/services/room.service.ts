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
  selectedRoom = {};

  constructor(private http:HttpClient) {
  }

  addNewRoom(room:Room):Observable<Room> {
    const url = this.apiUrl+'/api/rooms';
    return this.http.post<Room>(url,room,httpOptions);
  }

  getRooms():Observable<Room[]>{
    return this.http.get<Room[]>(this.apiUrl+'/api/rooms/desc');
  }

  deleteRoom(room: Room):Observable<Room>{
    const url = `${this.apiUrl}/api/rooms/${room.id}`;
    return this.http.delete<Room>(url);
  }

  editRoom(room: Room):Observable<any>{
    const url = `${this.apiUrl}/api/rooms/${room.id}`;
    this.selectedRoom = {
      "capacity": room.capacity,
      "location": room.location,
      "name": room.name,
      "tv": room.tv,
      "videocall": room.videocall,
      "whiteboard": room.whiteboard
    }
    return this.http.put<Room>(url, this.selectedRoom, httpOptions);
  }
}
