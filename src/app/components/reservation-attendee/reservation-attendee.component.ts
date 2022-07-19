import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Attendee, Reservation} from "../../Reservation";
import {Room} from "../../Room";

@Component({
  selector: 'app-reservation-attendee',
  templateUrl: './reservation-attendee.component.html',
  styleUrls: ['./reservation-attendee.component.css']
})
export class ReservationAttendeeComponent implements OnInit {
  @Input() reservation?:Reservation;
  @Input() attendees?:Attendee[];
  @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShowAttendeesModal:EventEmitter<Reservation> = new EventEmitter<Reservation>();
  constructor() {}

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit(true);
  }
}
