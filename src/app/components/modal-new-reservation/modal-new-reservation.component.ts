import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoomService} from "../../services/room.service";
import {ReservationService} from "../../services/reservation.service";
import {Room} from "../../Room";
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";

export interface NewReservationFormValue{
  "startedAt" : string,
  "finishedAt" : string,
  "name" : string,
  "roomId" : number
}

@UntilDestroy()
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
    this.roomService.getRooms().pipe(
      untilDestroyed(this),
      tap(
        (data:Room[])=>
          this.rooms = data
      )
    ).subscribe();

    this.authService.currentUserData.pipe(
      untilDestroyed(this),
      tap(
      (user) =>
        this.currentUser = user)
    ).subscribe();

  }

  onSubmit() {
    this.onAddReservation.emit(this.newReservationForm.value);
    this.onClose();
  }

  onClose() {
    this.close.emit(true);
  }
}
