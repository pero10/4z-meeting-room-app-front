import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {Room} from "../../Room";

@Component({
  selector: 'app-modal-temp',
  templateUrl: './modal-temp.component.html',
  styleUrls: ['./modal-temp.component.css']
})
export class ModalTempComponent implements OnInit {
  @Input() room?:Room;
  @Output() onDeleteTrigger : EventEmitter<Room> = new EventEmitter();

  constructor(public modalService : ModalService) {}

  ngOnInit(): void {
  }

  deleteTrigger(room ?: Room) {
    this.onDeleteTrigger.emit(room);
  }
}
