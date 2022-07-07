import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditRoomService} from "../../services/edit-room.service";
import {Room} from "../../Room";

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  @Input() room?:Room;


  constructor(public editRoomService : EditRoomService) { }

  ngOnInit(): void {
  }

}
