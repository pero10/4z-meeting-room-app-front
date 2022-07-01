import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../../services/reservation.service";
import { Reservation } from "../../Reservation";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationServices: ReservationService) { }

  ngOnInit(): void {
    this.reservationServices.getReservations().subscribe(
      (reservations) => (this.reservations = reservations)
    );
  }

}
