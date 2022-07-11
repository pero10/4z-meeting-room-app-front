import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../Reservation";
import {Room} from "../Room";
import {DATE_PIPE_DEFAULT_TIMEZONE, DatePipe, formatDate} from "@angular/common";
import {stringifyTask} from "@angular/compiler-cli/ngcc/src/execution/tasks/utils";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8002/api/reservations';
  selectedReservation = {};

  constructor(private http: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl);
  }

  getReservationsToday():Observable<Reservation[]>{
    const url = `${this.apiUrl}/today`;
    return this.http.get<Reservation[]>(url);
  }

  deleteReservation(reservation: Reservation): Observable<Reservation> {
    const url = `${this.apiUrl}/${reservation.id}`;
    return this.http.delete<Reservation>(url);
  }

  editReservation(reservation: Reservation): Observable<any>{
    const url = `${this.apiUrl}/${reservation.id}`;
    this.selectedReservation = {
      // "startedAt": formatDate(reservation.startedAt, 'MMMM d, y, h:mm:ss a z','startedAt','GMT+2' ),
      // "finishedAt": formatDate(reservation.finishedAt, 'MMMM d, y, h:mm:ss a z','finishedAt','GMT+2' ),
      "startedAt": reservation.startedAt,
      "finishedAt": reservation.finishedAt,
      "name": reservation.name,
      "status": reservation.status
    }
    // console.log('Tip', typeof(reservation.startedAt));
    console.log(this.selectedReservation);
    return this.http.patch<Reservation>(url, this.selectedReservation, httpOptions);
  }


}
