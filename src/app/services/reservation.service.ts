import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../Reservation";
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

  selectedUser:any;
  private selectedReservation: any;

  constructor(private http: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl+'/api/reservations');
  }

  getReservationsToday():Observable<Reservation[]>{
    const url = `${this.apiUrl}/api/reservations/today`;
    return this.http.get<Reservation[]>(url);
  }

  deleteReservation(reservation: Reservation): Observable<Reservation> {
    const url = `${this.apiUrl}/api/reservations/${reservation.id}`;
    return this.http.delete<Reservation>(url);
  }

  editReservation(reservation: Reservation): Observable<Reservation>{
    const url = `${this.apiUrl}/api/reservations/${reservation.id}`;
    this.selectedReservation = {

      "startedAt": reservation.startedAt,
      "finishedAt": reservation.finishedAt,
      "name": reservation.name,
      "status": reservation.status
      ,
      "room":reservation.room,
      "host":reservation.host
    }
    // console.log('Tip', typeof(reservation.startedAt));
    console.log(this.selectedReservation);
    // return (JSON)this.http.patch<any>(url, this.selectedReservation, httpOptions);
    return this.http.patch<any>(url, JSON.stringify(this.selectedReservation), httpOptions);
  }

  addReservation(reservation: Reservation):Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl+'/api/reservations',reservation,httpOptions);
  }
}
