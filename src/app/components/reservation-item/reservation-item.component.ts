import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Reservation} from "../../Reservation";
import {faClock, faTrashCan, faEye,faPen, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';

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

  faClock = faClock;
  faDelete = faTrashCan;
  faEye = faEye;
  faPen = faPen;
  faPeopleGroup = faPeopleGroup;

  notAdmin: boolean = false;

  // constructor(private dialogRef : MatDialog) {
  // }

  constructor(){}


  ngOnInit(): void {
    if(localStorage.getItem('isLoggedIn')){
      this.notAdmin = true;
    }
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

  // showModalTemp() {
  //   this.dialogRef.open(ModalTempComponent);
  // }


}
