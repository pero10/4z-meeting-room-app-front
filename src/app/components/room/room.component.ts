import {Component, Input, OnInit} from '@angular/core';
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {
  @Input() room?:Room;
  rooms:Room[]=[];
  selectedRoom?:Room;
  regularModalVisible:boolean=false;

  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms)=>(this.rooms=rooms));
  }

  deleteRoom(room: Room){
    this.roomService.deleteRoom(room).subscribe(
      () => (this.rooms = this.rooms.filter(r => r.id !== room.id))
    );
  }

  onModalToggle(room: Room) {
    this.regularModalVisible = true;
    this.selectedRoom = room;
  }

  deleteTrigger(room: Room) {
    this.regularModalVisible = false;
    this.deleteRoom(room);
  }
}
