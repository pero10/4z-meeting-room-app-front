import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Reservation} from "../../Reservation";
import {faClock, faTimes, faEye} from '@fortawesome/free-solid-svg-icons';
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

  faClock = faClock;
  faDelete = faTimes;
  faEye = faEye;

  // constructor(private dialogRef : MatDialog) {
  // }

  constructor(){}


  ngOnInit(): void {
  }

  deleteReservation(reservation: any) {
    this.deleteReservationTask.emit(reservation);
  }

  // showModalTemp() {
  //   this.dialogRef.open(ModalTempComponent);
  // }
}
