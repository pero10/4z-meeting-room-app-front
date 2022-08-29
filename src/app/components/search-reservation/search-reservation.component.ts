import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Reservation, ReservationHost, ReservationRoom} from "../../Reservation";

@Component({
  selector: 'app-search-reservation',
  templateUrl: './search-reservation.component.html',
  styleUrls: ['./search-reservation.component.css']
})
export class SearchReservationComponent implements OnInit {

  @Output() showReservationSearch:EventEmitter<Reservation> = new EventEmitter();
  @Output() searchOnSubmit:EventEmitter<Reservation> = new EventEmitter<Reservation>();

  newStartedAt?:DatePipe;
  newFinishedAt?:DatePipe;
  name?:string;
  status?:string;
  room?:ReservationRoom
  host?:ReservationHost;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(
      !this.newStartedAt&&
      !this.newFinishedAt&&
      !this.name&&
      !this.status&&
      !this.host&&
      !this.room
    ){
      alert("Please select even one parameter.");
      return;
    }

    const reservation:Reservation = {
      startedAt: this.newStartedAt!,
      finishedAt: this.newFinishedAt!,
      name: this.name!,
      status: this.status!,
      room: this.room!,
      host:this.host!,
      attendees:[]
    };
    this.searchOnSubmit.emit(reservation);
    }

    toggleReservationSearch(reservation?:Reservation){
    this.showReservationSearch.emit(reservation);
    }

    submitSearch(reservation?:Reservation){
    this.searchOnSubmit.emit(reservation);

    }

}


