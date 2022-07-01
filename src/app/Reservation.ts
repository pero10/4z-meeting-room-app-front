import {DatePipe} from "@angular/common";

export interface Reservation{
  "id" ?: number,
  "started_at": string,
  "finished_at": string,
  "name": string,
  "status": string,
}
