import {DatePipe} from "@angular/common";

export interface Reservation{
  "id" ?: number,
  "startedAt": DatePipe,
  "finishedAt": DatePipe,
  "name": string,
  "status": string,
  "room":ReservationRoom,
  "host":number,
  "attendee":Attendee
}

export interface ReservationRoom{
  "id":number
  "name":string
}

export interface Attendee{
  "id":number,
  "email":string,
  "firstName":string,
  "lastName":string
}

