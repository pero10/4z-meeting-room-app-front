import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {UntilDestroy} from "@ngneat/until-destroy";
import {Observable} from "rxjs";
import {Attendee} from "../../Reservation";
import {AddAttendee} from "../../AddAttendee";

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

  addUserToReservation(userAndReservation:AddAttendee){
    console.log(userAndReservation);
    this.reservationService.addUserToReservation(
      userAndReservation.userID,
      userAndReservation.reservationID
    ).subscribe();
  }

}
