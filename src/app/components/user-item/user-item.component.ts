import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from "../../User";
import { faEye, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service";

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

  faDelete = faTrashCan;
  faEye = faEye;
  faPencil = faPencil;
  notAdmin: boolean = false;

  currentUser?: LoginData | any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUserData.subscribe((user) => this.currentUser = user);
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
