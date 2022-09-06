import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Attendee, Reservation} from "../Reservation";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = environment.url;

  private selectedReservation: any;

  constructor(private http: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/api/reservations');
  }

  getReservationsToday(): Observable<Reservation[]> {
    const url = `${this.apiUrl}/api/reservations/today`;
    return this.http.get<Reservation[]>(url);
  }

  deleteReservation(reservation: Reservation): Observable<Reservation> {
    const url = `${this.apiUrl}/api/reservations/${reservation.id}`;
    return this.http.delete<Reservation>(url);
  }

  editReservation(reservation: Reservation): Observable<Reservation> {
    const url = `${this.apiUrl}/api/reservations/${reservation.id}`;
    this.selectedReservation = {

      "startedAt": reservation.started_at,
      "finishedAt": reservation.finished_at,
      "name": reservation.name,
      "status": reservation.status,
      "room": reservation.room,
      "host": reservation.host
    }

    console.log(this.selectedReservation);
    return this.http.patch<any>(url, JSON.stringify(this.selectedReservation), httpOptions);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl + '/api/reservations', reservation, httpOptions);
  }

  getReservationAttendees(id:number){
    const url = `${this.apiUrl}/api/reservations/attendees/coming/${id}`;
    return this.http.get<Attendee[]>(url);
  }

  getReservationPendingAttendees(reservation:Reservation){
    const url = `${this.apiUrl}/api/reservations/attendees/${reservation.id}`;
    return this.http.get(url);
  }

  searchReservation(searchReservationData: any)
  {
    let params: HttpParams = new HttpParams();

    Object.keys(searchReservationData).forEach(function (key) {
        if (searchReservationData[key] !== null)
          params = params.append(key, searchReservationData[key]);
      }
    )
    return this.http.get<Reservation[]>(this.apiUrl + '/api/reservations/filter', {params});
  }


}
