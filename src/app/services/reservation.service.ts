import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Attendee, Reservation} from "../Reservation";
import {environment} from "../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import {NewReservationFormValue} from "../components/modal-new-reservation/modal-new-reservation.component";

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

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
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
      "started_at": reservation.started_at,
      "finished_at": reservation.finished_at,
      "name": reservation.name,
      "status": reservation.status,
      "room": reservation.room,
      "host": reservation.host
    }
    return this.http.patch<any>(url, JSON.stringify(this.selectedReservation), httpOptions);
  }

  addReservation(reservation: NewReservationFormValue, hostId: number): Observable<Reservation> {
    const newReservation = {
      started_at: reservation.startedAt,
      finished_at: reservation.finishedAt,
      name: reservation.name,
      status: "Active",
      room: reservation.roomId,
      host: hostId,
    };
    return this.http.post<Reservation>(this.apiUrl + '/api/reservations', newReservation, httpOptions);
  }

  getReservationAttendees(id:number){
    const url = `${this.apiUrl}/api/reservations/attendees/coming/${id}`;
    return this.http.get<Attendee[]>(url);
  }

  getReservationPendingAttendees(id:number){
    const url = `${this.apiUrl}/api/reservations/attendees/${id}`;
    return this.http.get<Attendee[]>(url);
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
