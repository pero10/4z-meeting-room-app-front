import {Component, Input, OnInit} from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import {Reservation} from "../../Reservation";

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
  @Input() reservation?: Reservation;

  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
