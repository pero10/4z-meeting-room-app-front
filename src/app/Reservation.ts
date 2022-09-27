import {DatePipe} from "@angular/common";

export interface Reservation{
  "id" ?: number,
  "started_at": Date,
  "finished_at": Date,
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
  "name":string,
  "capacity":number
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

