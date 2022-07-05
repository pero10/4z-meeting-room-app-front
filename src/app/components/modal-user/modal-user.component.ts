import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {User} from "../../User";
import {faAt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {Reservation} from "../../Reservation";

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {
  @Input() user?:User;
  @Output() onDeleteTrigger : EventEmitter<User> = new EventEmitter();

  faAt = faAt;
  faPhone = faPhone;

  constructor(public modalService : ModalService) { }

  ngOnInit(): void {
  }

  deleteTrigger(user ?: User) {
    this.onDeleteTrigger.emit(user);
  }

}
