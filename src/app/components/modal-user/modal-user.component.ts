import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../User";
import {faAt, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {
  @Input() user?:User;
  @Output() onDeleteTrigger : EventEmitter<User> = new EventEmitter();
  @Output() close : EventEmitter<boolean> = new EventEmitter();

  faAt = faAt;
  faPhone = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTrigger(user ?: User) {
    this.onDeleteTrigger.emit(user);
  }

  onClose(){
    this.close.emit(true);
  }

}
