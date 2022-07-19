import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Attendee, Reservation} from "../../Reservation";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  attendees: Attendee[] = [];
  selectedReservation ?: Reservation;
  selectedAttendees ?: Attendee[];

  regularModalVisible: boolean = false;
  editModalVisible: boolean = false;
  insertModalVisible: boolean = false;
  attendeesModalVisible: boolean = false;

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

  onModalToggle(reservation: Reservation) {
    this.regularModalVisible = true;
    this.selectedReservation = reservation;
  }

  onEditModalToggle(reservation: Reservation) {
    this.editModalVisible = true;
    this.selectedReservation = reservation;
  }

  deleteTrigger(reservation: Reservation) {
    this.regularModalVisible = false;
    this.deleteReservationById(reservation);
  }

  addNewReservation(reservation: Reservation) {
    this.reservationService.addReservation(reservation).subscribe(
      (reservation) => (this.reservations.push(reservation)));
  }

  toggleInsertReservationModal() {
    this.insertModalVisible = true;
  }

  toggleAttendeesModal(reservation: Reservation){
    this.attendeesModalVisible = true;
    this.selectedReservation = reservation;
    this.selectedAttendees = reservation.attendees;
    console.log(this.selectedAttendees);
  }

  onSubmitEditForm(reservation: Reservation) {
    this.editModalVisible = false;
    this.reservationService.editReservation(reservation).subscribe();
    this.reservationService.getReservations().subscribe((reservation)=>(this.reservations=reservation));
  }
}
