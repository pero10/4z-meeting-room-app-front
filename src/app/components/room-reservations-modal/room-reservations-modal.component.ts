import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
import {Room} from "../../Room";
import {Reservation} from "../../Reservation";

@Component({
  selector: 'app-room-reservations-modal',
  templateUrl: './room-reservations-modal.component.html',
  styleUrls: ['./room-reservations-modal.component.css']
})
export class RoomReservationsModalComponent implements OnInit {
  @Input() room?: Room;

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  reservations:Reservation[]=[];

  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
    this.roomService.getRoomReservations(this.room?.id).subscribe(reservations =>{
      this.reservations = reservations;
      }
    );
  }

  onClose() {
    this.close.emit(true);
  }

}
