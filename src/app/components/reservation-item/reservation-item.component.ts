import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Reservation} from "../../Reservation";
import {faClock, faTimes, faEye,faPen} from '@fortawesome/free-solid-svg-icons';
// import {MatDialog} from "@angular/material/dialog";
import {ModalTempComponent} from "../modal-temp/modal-temp.component";

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

  faClock = faClock;
  faDelete = faTimes;
  faEye = faEye;
  faPen = faPen;

  // constructor(private dialogRef : MatDialog) {
  // }

  constructor(){}


  ngOnInit(): void {
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

  // showModalTemp() {
  //   this.dialogRef.open(ModalTempComponent);
  // }

}
