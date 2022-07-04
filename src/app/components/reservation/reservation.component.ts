import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../Reservation";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = []

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(
      (reservations) => (this.reservations = reservations)
    );
  }

  deleteReservationById(reservation: Reservation) {
    this.reservationService
      .deleteReservation(reservation)
      .subscribe(
        () => (this.reservations = this.reservations.filter((r) => r.id !== reservation.id))
      );
  }

}
