import {Component, EventEmitter, OnInit,Input,Output} from '@angular/core';
import {Reservation} from "../../Reservation";
import {FormControl, FormGroup} from "@angular/forms";
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";
import {Observable} from "rxjs";

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
  selectedRoom = this.reservation?.room;
  rooms$?: Observable<Room[]>;


  constructor(private roomService:RoomService) {
    this.editReservationForm = new FormGroup({
      id: new FormControl(),
      started_at: new FormControl(),
      finished_at: new FormControl(),
      name: new FormControl(),
      status: new FormControl(),
      room: new FormControl(),
      // host: new FormControl()
    })
  }

  ngOnInit(): void {
    this.rooms$ = this.roomService.getRooms();

    if(this.reservation){
      this.editReservationForm.patchValue(this.reservation);
      this.editReservationForm.controls['room'].setValue(this.reservation?.room?.id);
      this.editReservationForm.controls['started_at'].setValue(this.reservation?.started_at);
      this.editReservationForm.controls['finished_at'].setValue(this.reservation?.finished_at);
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
    console.log(this.editReservationForm.value);
  }

}
