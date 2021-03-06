import {DatePipe} from "@angular/common";

export interface Reservation{
  "id" ?: number,
  "startedAt": DatePipe,
  "finishedAt": DatePipe,
  "name": string,
  "status": string,
  "room":ReservationRoom,
  "host":ReservationHost,
  "attendees":Attendee[]
}

export interface ReservationHost{
  "id": number,
  "email": string,
  "firstName":string,
  "lastName": string
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

