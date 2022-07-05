import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {Room} from "../../Room";
import {faTv, faCamera, faLocationDot, faChalkboard} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-modal-temp',
  templateUrl: './modal-temp.component.html',
  styleUrls: ['./modal-temp.component.css']
})
export class ModalTempComponent implements OnInit {
  @Input() room?:Room;
  @Output() onDeleteTrigger : EventEmitter<Room> = new EventEmitter();

  faTv = faTv;
  faCamera = faCamera;
  faLocationDot = faLocationDot;
  faWhiteBoard = faChalkboard;

  constructor(public modalService : ModalService) {}

  ngOnInit(): void {
  }

  deleteTrigger(room ?: Room) {
    this.onDeleteTrigger.emit(room);
  }
}
