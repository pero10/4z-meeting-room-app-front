import {Component, OnInit} from '@angular/core';
import {Attendee} from "../../Reservation";
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {UntilDestroy} from "@ngneat/until-destroy";
import {Observable} from "rxjs";

@UntilDestroy()
@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {

  searchAttendeeModalVisible: boolean = false;
  attendees$?: Observable<Attendee[]>;
  pendingAttendees$?: Observable<Attendee[]>;
  id?: number;

  // attendeesModalVisible: boolean=false;

  constructor(
    private reservationService: ReservationService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        if (params['id']) {
          this.attendees$ = this.reservationService.getReservationAttendees(params['id']);
          this.pendingAttendees$ = this.reservationService.getReservationPendingAttendees(params['id']);
        }
      }
    );
  }

  toggleAttendeeSearchComponent() {
    this.searchAttendeeModalVisible = true;
  }

}
