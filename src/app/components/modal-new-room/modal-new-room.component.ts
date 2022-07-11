import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoomService} from "../../services/room.service";
import {Reservation} from "../../Reservation";
import {Room} from "../../Room";

@Component({
  selector: 'app-modal-new-room',
  templateUrl: './modal-new-room.component.html',
  styleUrls: ['./modal-new-room.component.css']
})
export class ModalNewRoomComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onAddRoom: EventEmitter<Room> = new EventEmitter();


  name?:string;
  location?:string;
  capacity?:number;
  tv?: boolean;
  whiteboard?: boolean;
  videocall?: boolean;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (
      !this.name ||
      !this.location||
      !this.capacity){
      alert('You can\'t leave main fields empty!');
      return
    }

    const tvNum=0,wbNum=0,vcNum=0;

    const newRoom: Room = {
      name:this.name!,
      location:this.location!,
      capacity:this.capacity!,
      tv: this.transferBooleanToNumber(this.tv!),
      whiteboard: this.transferBooleanToNumber(this.whiteboard!),
      videocall: this.transferBooleanToNumber(this.videocall!)
    };

    this.onAddRoom.emit(newRoom);
    this.onClose();
  }

  transferBooleanToNumber(item:boolean):number{
    if(item){
      return 1;
    }
    return 0;
  }

  onClose() {
    this.close.emit(true);
  }

}
