import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from "../../User";
import {faTimes, faEye, faPencil} from "@fortawesome/free-solid-svg-icons";
import {Reservation} from "../../Reservation";
import {Room} from "../../Room";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user ?: User;
  @Output() onDeleteUser : EventEmitter<User> = new EventEmitter();
  @Output() onShowModalUser:EventEmitter<User> = new EventEmitter();
  @Output() onShowEditModal : EventEmitter<User> = new EventEmitter();


  faDelete = faTimes;
  faEye = faEye;
  faPencil = faPencil;

  constructor() { }

  ngOnInit(): void {
  }

  onClickMakeReservation(){

  }

  onDelete(user?: User){
    this.onDeleteUser.emit(user);
  }

  showModalToggle(user ?: User) {
    this.onShowModalUser.emit(user);
  }

  showEditModalToggle(user?: User) {
    this.onShowEditModal.emit(user);
  }
}
