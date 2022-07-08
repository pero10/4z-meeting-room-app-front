import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Room} from "../../Room";
import {faTimes, faEye, faPencil} from "@fortawesome/free-solid-svg-icons";
import {Reservation} from "../../Reservation";
// import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() room?:Room;
  @Output() onDeleteRoom : EventEmitter<Room> = new EventEmitter();
  @Output() onShowModal : EventEmitter<Room> = new EventEmitter();
  @Output() onShowEditModal : EventEmitter<Room> = new EventEmitter()

  faDelete = faTimes;
  faEye = faEye;
  faPencil = faPencil;

  // constructor(private dialogRef : MatDialog) { }
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(room ?: Room){
    this.onDeleteRoom.emit(room);
  }

  showEditModalToggle(room ?: Room){
    this.onShowEditModal.emit(room);
  }

  showModalToggle(room ?: Room) {
    this.onShowModal.emit(room);
  }

}
