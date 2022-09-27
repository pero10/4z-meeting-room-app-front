import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../Reservation";
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-coming',
  templateUrl: './user-coming.component.html',
  styleUrls: ['./user-coming.component.css']
})
export class UserComingComponent implements OnInit {
  @Input() reservation?: Reservation;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
