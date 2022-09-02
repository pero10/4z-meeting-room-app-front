import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../Reservation";
import {ReservationService} from "../../services/reservation.service";
import {User} from "../../User";

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {
  searchAttendeeComponentVisible: boolean=false;
  attendees?: User;
  pendingAttendees?:User;
  reservation?:Reservation;

  constructor(private reservationService:ReservationService) { }

  ngOnInit() {
    this.reservationService.getReservationAttendees(this.reservation!).subscribe(
      comingAttendees => this.attendees = comingAttendees
    )
  }

  toggleAttendeeSearchComponent() {
    this.searchAttendeeComponentVisible = !this.searchAttendeeComponentVisible;
  }


}
