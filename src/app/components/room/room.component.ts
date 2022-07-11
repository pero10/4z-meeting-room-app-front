import {Component, Input, OnInit} from '@angular/core';
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";
import {ModalService} from "../../services/modal.service";
import {EditRoomService} from "../../services/edit-room.service";

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

  constructor(private roomService:RoomService, public modalService : ModalService, public editRoomService : EditRoomService) { }

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

  editModalToggle(room: Room) {
    this.editRoomService.showDialog = true;
    this.selectedRoom = room;
  }

  deleteTrigger(room: Room) {
    this.regularModalVisible = false;
    this.deleteRoom(room);
  }

  // editRoom(room: Room) {
  //   this.selectedRoom = room;
  //   console.log(this.selectedRoom);
  // }

  // editRoom(room: Room){
  //   this.roomService.editRoom(room).subscribe();
  // }
  //
  // onEditModalToggle(room: Room) {
  //   this.modalService.showDialog = true;
  //   this.selectedRoom = room;
  // }

  toggleInsertRoomModal() {
    this.insertModalVisible=true;
  }

  addNewRoom(room: Room) {
    this.roomService.addNewRoom(room).subscribe(
      (room)=>(this.rooms.push(room))
    );
  }
}
