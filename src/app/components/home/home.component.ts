import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../../services/reservation.service";
import {Reservation} from "../../Reservation";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reservations: Reservation[] = []

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservationsToday().subscribe(
      (reservations) => (this.reservations = reservations)
    );
  }

}
