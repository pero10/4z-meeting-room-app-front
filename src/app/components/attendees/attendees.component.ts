import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {UntilDestroy} from "@ngneat/until-destroy";
import {Attendee} from "../../Reservation";
import {AddAttendee} from "../../AddAttendee";

@UntilDestroy()
@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {

  @Output() capacityOutput: EventEmitter<number> = new EventEmitter<number>();

  searchAttendeeModalVisible: boolean = false;
  attendees?: Attendee[] = [];
  pendingAttendees?: Attendee[] = [];
  sumOfAttendees: number=0;
  reservationID?: number;
  capacity!: number;

  constructor(
    private reservationService: ReservationService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        if (params['id']) {
          this.reservationService.getReservationAttendees(params['id']).subscribe(
            attendees => {
              this.attendees = attendees;
              this.sumOfAttendees += attendees.length;
            });
          this.reservationService.getReservationPendingAttendees(params['id']).subscribe(
            pendingAttendees => {
              this.pendingAttendees = pendingAttendees;
              this.sumOfAttendees+=pendingAttendees.length;
            }
          );
        }
        if (params['roomCapacity']) {
          this.capacity = params['roomCapacity'];
        }
      }
    );
  }

  toggleAttendeeSearchComponent() {
    this.searchAttendeeModalVisible = true;
  }

  addUserToReservation(userAndReservation: AddAttendee) {
    this.reservationService.addUserToReservation(
      userAndReservation.userID,
      userAndReservation.reservationID
    ).subscribe();
  }

  getCapacity(): number {
    return this.capacity;
  }

  getSumOfAttendees(): number {
    return this.sumOfAttendees;
  }
}
