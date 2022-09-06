import {Component, OnInit} from '@angular/core';
import {Attendee} from "../../Reservation";
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {
  searchAttendeeComponentVisible: boolean=false;

  attendees?: Attendee[] = [];
  pendingAttendees?: Attendee;
  id?: number;

  constructor(
    private reservationService: ReservationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.id = params['id'];
      }
    );

    this.reservationService.getReservationAttendees(this.id!).subscribe(
      (comingAttendees => {
          this.attendees = comingAttendees
        }
      ));
  }

  toggleAttendeeSearchComponent() {
    this.searchAttendeeComponentVisible = !this.searchAttendeeComponentVisible;
  }
}
