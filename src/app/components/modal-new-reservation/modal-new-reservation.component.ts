import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Attendee, Reservation, ReservationHost, ReservationRoom} from "../../Reservation";
import {DatePipe} from "@angular/common";
import {RoomService} from "../../services/room.service";
import {ReservationService} from "../../services/reservation.service";
import {Room} from "../../Room";
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-modal-new-reservation',
  templateUrl: './modal-new-reservation.component.html',
  styleUrls: ['./modal-new-reservation.component.css']
})
export class ModalNewReservationComponent implements OnInit {

  @Output() onAddReservation: EventEmitter<Reservation> = new EventEmitter();
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();


  startedAt?: DatePipe;
  finishedAt?: DatePipe;
  name?: string;
  status?: string;
  room?: ReservationRoom;
  host?:ReservationHost;
  rooms?: Room[];
  attendee?: Attendee[];

  currentUser?: LoginData | null;

  constructor(private reservationService: ReservationService,
              private roomService: RoomService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(
      (data: Room[]) => {
        this.rooms = data;
      });
    this.authService.currentUserData.subscribe((user) => this.currentUser = user);
  }

  onSubmit() {
    if (
      !this.startedAt ||
      !this.finishedAt ||
      !this.name ||
      !this.status ||
      !this.room) {
      alert('You can\'t leave any of the fields empty!');
      return;
    }

    const newReservation: Reservation = {
      started_at: this.startedAt!,
      finished_at: this.finishedAt!,
      name: this.name!,
      status: this.status!,
      room: this.room!,
      host:this.host!,
      attendees:this.attendee!
    };

    this.onAddReservation.emit(newReservation);
    this.onClose();
  }

  onClose() {
    this.close.emit(true);
  }
}
