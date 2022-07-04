import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Room} from "../../Room";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() room?:Room;
  @Output() onDeleteRoom : EventEmitter<Room> = new EventEmitter();

  faDelete = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(room ?: Room){
    this.onDeleteRoom.emit(room);
    // console.log(room);
  }

}
