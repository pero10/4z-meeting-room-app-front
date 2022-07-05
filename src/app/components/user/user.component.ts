import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../User";
import {Reservation} from "../../Reservation";
import {ModalService} from "../../services/modal.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser ?: User;

  constructor(private userService: UserService, public modalService : ModalService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users)=> (this.users = users)
    );
  }

  deleteUser(user:User){
    this.userService.deleteUser(user).subscribe(
      () => (this.users = this.users.filter(u => u.id !== user.id))
    );
  }

  onModalToggle(user : User){
    this.modalService.showDialog = true;
    this.selectedUser = user;
  }

  deleteTrigger(user : User){
    this.deleteUser(user);
    this.modalService.showDialog = false;
  }

}
