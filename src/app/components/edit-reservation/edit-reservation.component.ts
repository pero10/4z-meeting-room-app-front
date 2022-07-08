import {Component, EventEmitter, OnInit,Input,Output} from '@angular/core';
import {Reservation} from "../../Reservation";

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {
  @Input() reservation?: Reservation;
  @Output() onUpdateReservation:EventEmitter<Reservation> = new EventEmitter<Reservation>();
  @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  updateReservation(reservation?: Reservation) {
    this.onUpdateReservation.emit(reservation);
  }

  onClose(){
    this.close.emit(true);
  }

}
