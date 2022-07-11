import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from "../../Room";
import {faTv, faCamera, faLocationDot, faChalkboard, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-modal-temp',
  templateUrl: './modal-temp.component.html',
  styleUrls: ['./modal-temp.component.css']
})
export class ModalTempComponent implements OnInit {
  @Input() room?:Room;
  @Output() onDeleteTrigger : EventEmitter<Room> = new EventEmitter();
  @Output() close : EventEmitter<boolean> = new EventEmitter();

  faTv = faTv;
  faCamera = faCamera;
  faLocationDot = faLocationDot;
  faWhiteBoard = faChalkboard;
  faPeopleGroup = faPeopleGroup;

  constructor() {}

  ngOnInit(): void {
  }

  deleteTrigger(room ?: Room) {
    this.onDeleteTrigger.emit(room);
  }

  onClose(){
    this.close.emit(true);
  }
}
