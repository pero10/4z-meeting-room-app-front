import {DatePipe} from "@angular/common";

export interface Reservation{
  "id" ?: number,
  "startedAt": DatePipe,
  "finishedAt": DatePipe,
  "name": string,
  "status": string,
  "room":ReservationRoom
}

export interface ReservationRoom{
  "name":string
}
