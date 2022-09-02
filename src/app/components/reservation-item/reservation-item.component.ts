import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Reservation} from "../../Reservation";
import {
  faClock,
  faTrashCan,
  faEye,
  faPen,
  faPeopleGroup,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service"

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input() reservation?: Reservation;
  @Output() deleteReservationTask:EventEmitter<Reservation> = new EventEmitter<Reservation>();
  @Output() updateReservationTask:EventEmitter<Reservation> = new EventEmitter<Reservation>();
  @Output() onShowModal:EventEmitter<Reservation> = new EventEmitter<Reservation>();
  @Output() onShowEditModal:EventEmitter<Reservation> = new EventEmitter();
  @Output() onShowAttendeesToggle:EventEmitter<Reservation> = new EventEmitter<Reservation>()
  @Output() onShowAttendeesPage:EventEmitter<Reservation> = new EventEmitter<Reservation>()

  faClock = faClock;
  faDelete = faTrashCan;
  faEye = faEye;
  faPen = faPen;
  faPeopleGroup = faPeopleGroup;
  faAddAttendee = faUserPlus;

  currentUser?: LoginData | null;

  constructor(private authService: AuthService){}


  ngOnInit(): void {
    this.authService.currentUserData.subscribe((user) => this.currentUser = user);
  }

  deleteReservation(reservation: any) {
    this.deleteReservationTask.emit(reservation);
  }

  showModalToggle(reservation ?: Reservation) {
    this.onShowModal.emit(reservation);
  }

  showEditModalToggle(reservation?: Reservation) {
    this.onShowEditModal.emit(reservation);
  }

  showAttendeesToggle(reservation?: Reservation){
    this.onShowAttendeesToggle.emit(reservation);
  }

  openAddAttendeePage(reservation?: Reservation){
    this.onShowAttendeesPage.emit(reservation);
  }
}
