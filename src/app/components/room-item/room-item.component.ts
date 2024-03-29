import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Room} from "../../Room";
import {faEye, faPencil, faTrashCan,faClipboard} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../services/auth.service";
import {LoginData} from "../../LoginData";
import { Reservation } from 'src/app/Reservation';

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
  @Output() onShowReservationsModal : EventEmitter<Room> = new EventEmitter()

  faDelete = faTrashCan;
  faEye = faEye;
  faPencil = faPencil;
  faClipboard = faClipboard
  currentUser?: LoginData | any;

  notAdmin: boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.currentUserData.subscribe((user) => this.currentUser = user);
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

  showThisRoomReservationsModal(room?:Room) {
    this.onShowReservationsModal.emit(room);
  }
}
