import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms:Room[]=[];

  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms)=>(this.rooms=rooms));
  }

}
