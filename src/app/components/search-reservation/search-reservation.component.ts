import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-search-reservation',
  templateUrl: './search-reservation.component.html',
  styleUrls: ['./search-reservation.component.css']
})
export class SearchReservationComponent implements OnInit {

  newStartedAt?:DatePipe;
  newFinishedAt?:DatePipe;

  constructor() {
  }

  ngOnInit(): void {
  }

}
