import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Reservation} from "../../Reservation";
import {FormControl, FormGroup} from "@angular/forms";
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-reservation',
  templateUrl: './search-reservation.component.html',
  styleUrls: ['./search-reservation.component.css']
})
export class SearchReservationComponent implements OnInit {

  @Output() searchOnSubmit: EventEmitter<Reservation> = new EventEmitter<Reservation>();
  @Output() showReservationSearch: EventEmitter<Reservation> = new EventEmitter();

  searchReservationForm!: FormGroup;
  rooms?: Room[];

  constructor(private roomService: RoomService,
              private router:Router) {
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
    this.router.navigate(['/dashboard/reservation'],{queryParams:this.searchReservationForm.value});
  }

  toggleReservationSearch(reservation?: Reservation) {
    this.showReservationSearch.emit(reservation);
  }

  clearFilters() {
    this.searchReservationForm.reset();
    this.onSubmit();
  }
}


