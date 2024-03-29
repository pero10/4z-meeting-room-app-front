import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Attendee, Reservation} from "../../Reservation";
import {User} from "../../User";

@Component({
  selector: 'app-reservation-attendee',
  templateUrl: './reservation-attendee.component.html',
  styleUrls: ['./reservation-attendee.component.css']
})
export class ReservationAttendeeComponent implements OnInit {
  @Input() reservation?:Reservation;
  @Input() attendees?:Attendee[];
  @Input() pendingAttendees?:Attendee[];
  @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() attendeesPage:EventEmitter<any> = new EventEmitter<any>();
  @Output() onShowAttendeesModal:EventEmitter<Reservation> = new EventEmitter<Reservation>();
  @Output() attendeesList:EventEmitter<User> = new EventEmitter<User>();

  constructor(

  ) {}

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit(true);
  }

}
