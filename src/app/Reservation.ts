import {DatePipe} from "@angular/common";

export interface Reservation{
  "id" ?: number,
  "started_at": DatePipe,
  "finished_at": DatePipe,
  "name": string,
  "status": string,
  "room":ReservationRoom,
  "host":ReservationHost,
  "attendees":Attendee[],
  "pendingAttendees":Attendee[],
}

export interface ReservationHost{
  "id": number,
  "email": string,
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

export interface pendingAttendee{
  "id":number,
  "email":string,
  "firstName":string,
  "lastName":string
}

