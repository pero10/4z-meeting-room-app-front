import {Component, EventEmitter, OnInit,Input,Output} from '@angular/core';
import {Reservation} from "../../Reservation";
import {FormControl, FormGroup} from "@angular/forms";
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";
import {DatePipe} from "@angular/common";

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
  selectedRoom = this.reservation?.room;


  constructor(private roomService:RoomService) {
    this.editReservationForm = new FormGroup({
      id: new FormControl(),
      startedAt: new FormControl(),
      finishedAt: new FormControl(),
      name: new FormControl(),
      status: new FormControl(),
      // room: new FormControl(),
      room: new FormControl(),
      // room: new FormControl(),
      // host: new FormControl()
    })

  }

  ngOnInit(): void {
    if(this.reservation){
      this.editReservationForm.patchValue(this.reservation);
      this.editReservationForm.controls['room'].setValue(this.reservation?.room?.id);
      //'UTC - yyyy-MM-dThh:mm:ssz'
      // let startedAt = new Date('UTC - yyyy-MM-dThh:mm:ssz');
      this.editReservationForm.controls['startedAt'].setValue(this.reservation?.startedAt);
      this.editReservationForm.controls['finishedAt'].setValue(this.reservation?.finishedAt);
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
    console.log(this.editReservationForm.value);
  }

}
