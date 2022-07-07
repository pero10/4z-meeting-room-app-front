import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../Reservation";


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

  editReservation(reservation: Reservation)//:Observable<Reservation>
    {
    // const url = `${this.apiUrl}/${reservation.id}`;
    // return this.http.patch<Reservation>(url);
  }


}
