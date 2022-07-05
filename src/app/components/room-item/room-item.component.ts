import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Room} from "../../Room";
import {faTimes, faEye} from "@fortawesome/free-solid-svg-icons";
import {ModalService} from "../../services/modal.service";
// import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() room?:Room;
  @Output() onDeleteRoom : EventEmitter<Room> = new EventEmitter();
  @Output() onShowModal : EventEmitter<Room> = new EventEmitter();

  faDelete = faTimes;
  faEye = faEye;

  // constructor(private dialogRef : MatDialog) { }
  constructor(public modalService : ModalService) { }

  ngOnInit(): void {
  }

  onDelete(room ?: Room){
    this.onDeleteRoom.emit(room);
  }

  // showModalTemp() {
  //     this.dialogRef.open(ModalTempComponent, {
  //       data : {
  //         name: 'Petar'
  //       }
  //     });
  // }

  showModalToggle(room ?: Room) {
    this.onShowModal.emit(room);
  }

}
