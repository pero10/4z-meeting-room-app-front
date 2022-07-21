import {Component, Input, OnInit} from '@angular/core';
import { ReservationService } from "../../services/reservation.service";
import {Attendee, Reservation} from "../../Reservation";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() reservation?: Reservation;
  reservations: Reservation[] = [];
  attendeesModalVisible: boolean = false;
  selectedReservation ?: Reservation;
  selectedAttendees ?: Attendee[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservationsToday().subscribe(
      (reservations) => (this.reservations = reservations)
    );
  }

  toggleAttendeesModal(reservation: Reservation){
    this.attendeesModalVisible = true;
    this.selectedReservation = reservation;
    this.selectedAttendees = reservation.attendees;
  }
}
