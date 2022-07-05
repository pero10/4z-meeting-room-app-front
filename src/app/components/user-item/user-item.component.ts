import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from "../../User";
import {faTimes, faEye} from "@fortawesome/free-solid-svg-icons";
import {Reservation} from "../../Reservation";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user ?: User;
  @Output() onDeleteUser : EventEmitter<User> = new EventEmitter();
  @Output() onShowModalUser:EventEmitter<User> = new EventEmitter();


  faDelete = faTimes;
  faEye = faEye;

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

}
