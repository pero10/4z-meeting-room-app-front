import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../Reservation";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  selectedReservation ?: Reservation;

  regularModalVisible:boolean=false;
  editModalVisible:boolean=false;

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

  onModalToggle(reservation : Reservation){
    this.regularModalVisible=true;
    this.selectedReservation = reservation;
  }

  onEditModalToggle(reservation : Reservation){
    this.editModalVisible=true;
    this.selectedReservation = reservation;
  }

  deleteTrigger(reservation : Reservation){
    this.regularModalVisible = false;
    this.deleteReservationById(reservation);
  }
}
