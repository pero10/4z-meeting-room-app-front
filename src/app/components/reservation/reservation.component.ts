import {Component, Input, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Attendee, Reservation} from "../../Reservation";
import {Room} from "../../Room";
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input() room?:Room;
  reservations: Reservation[] = [];
  selectedReservation ?: Reservation;
  selectedAttendees ?: Attendee[];

  regularModalVisible: boolean = false;
  editModalVisible: boolean = false;
  insertModalVisible: boolean = false;
  attendeesModalVisible: boolean = false;
  searchReservationComponentVisible:boolean = false;

  currentUser?: LoginData | any;

  constructor(private reservationService: ReservationService,
              private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(
      (reservations) => (this.reservations = reservations)
    );
    this.authService.currentUserData.subscribe((user) => this.currentUser = user);
  }

  deleteReservationById(reservation: Reservation) {
    this.reservationService
      .deleteReservation(reservation)
      .subscribe(
        () => (this.reservations = this.reservations.filter((r) => r.id !== reservation.id))
      );
  }

  searchReservation(searchReservationData:any){
    this.reservationService
      .searchReservation(searchReservationData)
      .subscribe(searchedReservation => this.reservations = searchedReservation);
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
    this.searchReservationComponentVisible = false;
    this.reservationService.getReservations().subscribe(refreshedReservations => this.reservations = refreshedReservations);
  }

  toggleAttendeesModal(reservation: Reservation){
    this.attendeesModalVisible = true;
    this.selectedReservation = reservation;
    this.selectedAttendees = reservation.attendees;
  }

  onSubmitEditForm(reservation: Reservation) {
    this.editModalVisible = false;
    this.reservationService.editReservation(reservation).subscribe();
    this.reservationService.getReservations().subscribe((reservation)=>(this.reservations=reservation));
  }

  toggleReservationSearchComponent() {
    this.searchReservationComponentVisible = !this.searchReservationComponentVisible;
  }

}
