import {Component, EventEmitter, OnInit,Input,Output} from '@angular/core';
import {Reservation} from "../../Reservation";
import {Room} from "../../Room";
import {FormControl, FormGroup} from "@angular/forms";
import {ReservationService} from "../../services/reservation.service"

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {
  @Input() reservation?: Reservation;
  @Output() onUpdateReservation:EventEmitter<Reservation> = new EventEmitter<Reservation>();
  @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submit:EventEmitter<Reservation> = new EventEmitter<Reservation>();
  editReservationForm: FormGroup;

  constructor(public reservationService : ReservationService) {
    this.editReservationForm = new FormGroup({
      id: new FormControl(),
      startedAt: new FormControl(),
      finishedAt: new FormControl(),
      name: new FormControl(),
      status: new FormControl()
    })
  }

  ngOnInit(): void {
    if(this.reservation){
      let startedAt = new Date(this.reservation.startedAt);
      let finishedAt = new Date(this.reservation.finishedAt);
      console.log(startedAt, finishedAt);
      this.editReservationForm.controls['startedAt'].setValue(startedAt);
      this.editReservationForm.controls['finishedAt'].setValue(finishedAt);
      this.editReservationForm.patchValue(this.reservation);

    }
  }

  updateReservation(reservation?: Reservation) {
    this.onUpdateReservation.emit(reservation);
  }

  onClose(){
    this.close.emit(true);
  }

  onSubmit() {
    this.submit.emit(this.editReservationForm.value);
  }
}
