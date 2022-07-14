import {Component, EventEmitter, OnInit,Input,Output} from '@angular/core';
import {Reservation} from "../../Reservation";
import {FormControl, FormGroup} from "@angular/forms";
import {ReservationService} from "../../services/reservation.service"
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";

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
  rooms: Room[] = [];

  constructor(public reservationService : ReservationService,private roomService:RoomService) {
    this.editReservationForm = new FormGroup({
      id: new FormControl(),
      startedAt: new FormControl(),
      finishedAt: new FormControl(),
      name: new FormControl(),
      status: new FormControl(),
      room: new FormControl(),
      // host: new FormControl()
    })

  }

  ngOnInit(): void {
    if(this.reservation){
      let startedAt = this.reservation?.startedAt;
      let finishedAt = this.reservation.finishedAt;
      console.log(startedAt, finishedAt);
      this.editReservationForm.controls['startedAt'].setValue(startedAt);
      this.editReservationForm.controls['finishedAt'].setValue(finishedAt);
      this.editReservationForm.patchValue(this.reservation);

    }

    this.roomService.getRooms().subscribe((rooms)=>(this.rooms=rooms));
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
