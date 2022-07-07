import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../Reservation";
import {faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-reservation',
  templateUrl: './modal-reservation.component.html',
  styleUrls: ['./modal-reservation.component.css']
})
export class ModalReservationComponent implements OnInit {
  @Input() reservation?:Reservation;
  @Output() onDeleteTrigger : EventEmitter<Reservation> = new EventEmitter();
  @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>();

  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTrigger(reservation ?: Reservation) {
    this.onDeleteTrigger.emit(reservation);
  }

  onClose(){
    this.close.emit(true);
  }
}
