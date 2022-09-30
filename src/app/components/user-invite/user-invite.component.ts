import {Component, Input, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Attendee, Reservation} from "../../Reservation";
import {LoginData} from "../../LoginData";
import { faClock, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";
import {AuthService} from "../../services/auth.service";

@UntilDestroy()
@Component({
  selector: 'app-user-invite',
  templateUrl: './user-invite.component.html',
  styleUrls: ['./user-invite.component.css']
})
export class UserInviteComponent implements OnInit {
  @Input() reservation?: Reservation;
  faClock = faClock;
  faCheck = faCheck;
  faX = faXmark;
  currentUser?: LoginData | any;

  constructor(private reservationService: ReservationService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUserData.pipe(
      untilDestroyed(this),
      tap(user =>
        (this.currentUser = user)
      )
    ).subscribe();
  }

  acceptMeeting() {
    this.reservationService.userAcceptMeetingRequest(this.currentUser?.id).subscribe();
  }

  declineMeeting() {
    this.reservationService.userAcceptMeetingRequest(this.currentUser?.id).subscribe();
  }
}
