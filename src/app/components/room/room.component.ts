import {Component, Input, OnInit} from '@angular/core';
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service";

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
  insertModalVisible:boolean=false;
  editModalVisible:boolean = false;

  currentUser?: LoginData | any;

  constructor(private roomService:RoomService,
              private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms)=>(this.rooms=rooms));
    this.authService.currentUserData.subscribe((user) => this.currentUser = user);
  }

  deleteRoom(room: Room){
    this.roomService.deleteRoom(room).subscribe(
      () => (this.rooms = this.rooms.filter(r => r.id !== room.id))
    );
  }

  onSubmitEditForm(room: Room) {
    this.editModalVisible = false;
    this.roomService.editRoom(room).subscribe();
    this.roomService.getRooms().subscribe((rooms)=>(this.rooms=rooms));
  }

  onModalToggle(room: Room) {
    this.regularModalVisible = true;
    this.selectedRoom = room;
  }

  editModalToggle(room: Room) {
    this.editModalVisible = true;
    this.selectedRoom = room;
  }

  deleteTrigger(room: Room) {
    this.regularModalVisible = false;
    this.deleteRoom(room);
  }


  toggleInsertRoomModal() {
    this.insertModalVisible=true;
  }

  addNewRoom(room: Room) {
    this.roomService.addNewRoom(room).subscribe(
      (room)=>(this.rooms.push(room))
    );
  }
}
