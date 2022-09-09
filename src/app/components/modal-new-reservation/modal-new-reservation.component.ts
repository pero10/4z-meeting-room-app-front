import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Attendee, Reservation, ReservationHost, ReservationRoom} from "../../Reservation";
import {DatePipe} from "@angular/common";
import {RoomService} from "../../services/room.service";
import {ReservationService} from "../../services/reservation.service";
import {Room} from "../../Room";
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";

export interface NewReservationFormValue{
  "startedAt" : string,
  "finishedAt" : string,
  "name" : string,
  "roomId" : number
}

@Component({
  selector: 'app-modal-new-reservation',
  templateUrl: './modal-new-reservation.component.html',
  styleUrls: ['./modal-new-reservation.component.css']
})
export class ModalNewReservationComponent implements OnInit {

  @Output() onAddReservation: EventEmitter<NewReservationFormValue> = new EventEmitter();
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  rooms?: Room[];

  currentUser?: LoginData | null;
  newReservationForm: UntypedFormGroup;

  constructor(private reservationService: ReservationService,
              private roomService: RoomService,
              private authService: AuthService) {

    this.newReservationForm = new FormGroup({
      "startedAt" : new FormControl<string | null>(null, Validators.required),
      "finishedAt" : new FormControl<string | null>(null, Validators.required),
      "name" : new FormControl<string | null>(null, Validators.required),
      "roomId" : new FormControl<number | null>(null, Validators.required),
    })
  }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(
      (data: Room[]) => {
        this.rooms = data;
      });
    this.authService.currentUserData.subscribe((user) => this.currentUser = user);
  }

  onSubmit() {
    this.onAddReservation.emit(this.newReservationForm.value);
    this.onClose();
  }

  onClose() {
    this.close.emit(true);
  }
}
