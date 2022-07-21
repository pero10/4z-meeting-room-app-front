import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faClock, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import {Reservation} from "../../Reservation";

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
  @Input() reservation?: Reservation;
  @Output() onShowAttendeesToggle:EventEmitter<Reservation> = new EventEmitter<Reservation>();

  faClock = faClock;
  faPeopleGroup = faPeopleGroup;

  constructor() { }

  ngOnInit(): void {
  }

  showAttendeesToggle(reservation: any) {
    this.onShowAttendeesToggle.emit(reservation);
  }
}
