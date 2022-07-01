import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Reservation } from "../Reservation";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8000/api/reservations';

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl);
  }
}
