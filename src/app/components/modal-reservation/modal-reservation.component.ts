import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";
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

  faClock = faClock;

  constructor(public modalService : ModalService) { }

  ngOnInit(): void {
  }

  deleteTrigger(reservation ?: Reservation) {
    this.onDeleteTrigger.emit(reservation);
  }

}
