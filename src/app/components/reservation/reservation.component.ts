import {Component, Input, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Attendee, Reservation} from "../../Reservation";
import {Room} from "../../Room";
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {NewReservationFormValue} from "../modal-new-reservation/modal-new-reservation.component";
import {Observable, switchMap, tap} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input() room?: Room;
  reservations: Reservation[] = [];
  selectedReservation ?: Reservation;
  selectedAttendees ?: Attendee[];
  selectedPendingAttendees ?: Attendee[];

  reservations$?: Observable<Reservation[]>;
  regularModalVisible: boolean = false;
  editModalVisible: boolean = false;
  insertModalVisible: boolean = false;
  attendeesModalVisible: boolean = false;
  searchReservationComponentVisible: boolean = false;
  searchReservationParameters!: any;


  currentUser?: LoginData | any;

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.authService.currentUserData.pipe(
      untilDestroyed(this),
      tap(user =>
        (this.currentUser = user)
      )
    ).subscribe();

    this.activatedRoute.queryParams.pipe(
      untilDestroyed(this),
      tap(params => {
        this.reservations$ = this.reservationService.searchReservation(params);
      })
    ).subscribe();
  }

  deleteReservationById(reservation: Reservation) {
    this.reservationService
      .deleteReservation(reservation)
      .subscribe(
        () => (
          this.reservations = this.reservations.filter(
            (r) => r.id !== reservation.id
          )
        )
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

  addNewReservation(reservationFormValue: NewReservationFormValue) {
    this.reservationService.addReservation(reservationFormValue, this.currentUser.id).pipe(
      tap(res => console.log(`beforeL:`, res)),
      switchMap(res => this.reservationService.getReservations()),
      tap(res => this.reservations = res)
    ).subscribe();
  }

  toggleInsertReservationModal() {
    this.insertModalVisible = true;
    this.searchReservationComponentVisible = false;
  }

  toggleAttendeesModal(reservation: Reservation) {
    this.attendeesModalVisible = true;
    this.selectedReservation = reservation;
    this.selectedAttendees = reservation.attendees;
    this.selectedPendingAttendees = reservation.pendingAttendees;
  }

  onSubmitEditForm(reservation: Reservation) {
    this.editModalVisible = false;
    this.reservationService.editReservation(reservation).subscribe();
  }

  toggleReservationSearchComponent() {
    this.searchReservationComponentVisible = !this.searchReservationComponentVisible;
  }


}
