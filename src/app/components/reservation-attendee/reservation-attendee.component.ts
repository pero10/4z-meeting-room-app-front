import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Attendee, Reservation} from "../../Reservation";
import {User} from "../../User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reservation-attendee',
  templateUrl: './reservation-attendee.component.html',
  styleUrls: ['./reservation-attendee.component.css']
})
export class ReservationAttendeeComponent implements OnInit {
  @Input() reservation?:Reservation;
  @Input() attendees?:Attendee[];
  @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() attendeesPage:EventEmitter<any> = new EventEmitter<any>();
  @Output() onShowAttendeesModal:EventEmitter<Reservation> = new EventEmitter<Reservation>();
  @Output() attendeesList:EventEmitter<User> = new EventEmitter<User>();

  constructor(
    // private router: Router,
    // private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit(true);
  }

}
