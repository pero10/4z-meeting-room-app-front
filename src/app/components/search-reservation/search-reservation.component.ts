import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Reservation, ReservationHost, ReservationRoom} from "../../Reservation";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";

@Component({
  selector: 'app-search-reservation',
  templateUrl: './search-reservation.component.html',
  styleUrls: ['./search-reservation.component.css']
})
export class SearchReservationComponent implements OnInit {

  @Output() showReservationSearch: EventEmitter<Reservation> = new EventEmitter();
  @Output() searchOnSubmit: EventEmitter<Reservation> = new EventEmitter<Reservation>();

  searchReservationForm!: FormGroup;
  rooms?: Room[];

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.searchReservationForm = new FormGroup({
      started_at: new FormControl(),
      finished_at: new FormControl(),
      name: new FormControl(),
      status: new FormControl(),
      room: new FormControl(),
      host: new FormControl()
    });

      this.roomService.getRooms().subscribe(
      (data: Room[]) => {
        this.rooms = data;
      });
  }

  onSubmit() {
    // console.log(this.searchReservationForm.value);

    this.searchOnSubmit.emit(this.searchReservationForm.value);
  }

  toggleReservationSearch(reservation?: Reservation) {
    this.showReservationSearch.emit(reservation);
  }

  submitSearch(reservation?: any) {
    this.searchOnSubmit.emit(reservation);
  }
}


