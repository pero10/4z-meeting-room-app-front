import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from "../../Room";
import {FormControl, FormGroup} from "@angular/forms";
import {RoomService} from "../../services/room.service";

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  @Input() room?:Room;
  @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submit:EventEmitter<Room> = new EventEmitter<Room>();
  editRoomForm: FormGroup;

  constructor(public roomService : RoomService) {
    this.editRoomForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      location: new FormControl(),
      capacity: new FormControl(),
      tv: new FormControl(),
      whiteboard: new FormControl(),
      videocall: new FormControl()
    })
  }

  ngOnInit(): void {
    if(this.room){
      this.editRoomForm.patchValue(this.room);
    }
  }

  onClose(){
    this.close.emit(true);
  }

  onSubmit(){
    this.submit.emit(this.editRoomForm.value);
  }
}
