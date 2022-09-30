import { Component, OnInit } from '@angular/core';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Reservation} from "../../Reservation";
import {ReservationService} from "../../services/reservation.service";
import {LoginData} from "../../LoginData";

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userPendingReservation?: Reservation[] = [];
  userComingReservation?: Reservation[] = [];
  currentUser?: LoginData | any;

  constructor(private authService: AuthService,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.authService.currentUserData.pipe(
      untilDestroyed(this),
      tap(user =>
        (this.currentUser = user)
      )
    ).subscribe();

    if(this.currentUser){
      //reservations where user is invited
      this.reservationService.getPendingUserReservations(this.currentUser.id).subscribe(
        reservations => {
          this.userPendingReservation = reservations;
        }
      );

      //reservations where user is coming to
      this.reservationService.getComingUserReservations(this.currentUser.id).subscribe(
        reservations => {
          this.userComingReservation = reservations;
        }
      )
    }

  }


}
