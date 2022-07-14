import {DatePipe} from "@angular/common";

export interface Reservation{
  "id" ?: number,
  "startedAt": Date,
  "finishedAt": Date,
  "name": string,
  "status": string,
  "room":ReservationRoom,
  "host":number
}

export interface ReservationRoom{
  "id":number
  "name":string
}
