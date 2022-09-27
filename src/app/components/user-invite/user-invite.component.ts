import {Component, Input, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Attendee, Reservation} from "../../Reservation";
import {LoginData} from "../../LoginData";
import { faClock, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user-invite',
  templateUrl: './user-invite.component.html',
  styleUrls: ['./user-invite.component.css']
})
export class UserInviteComponent implements OnInit {
  @Input() reservation?: Reservation;
  faClock = faClock;
  faCheck = faCheck;
  faX = faXmark;
  constructor() { }

  ngOnInit(): void {
  }
}
