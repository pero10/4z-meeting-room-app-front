import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../Reservation";
import {ModalService} from "../../services/modal.service";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  selectedReservation ?: Reservation;

  constructor(private reservationService: ReservationService, public modalService : ModalService) {
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
    this.modalService.showDialog = true;
    this.selectedReservation = reservation;
  }

  deleteTrigger(reservation : Reservation){
    this.deleteReservationById(reservation);
    this.modalService.showDialog = false;
  }



}
