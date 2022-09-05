import {Component, Input, OnInit} from '@angular/core';
import {Attendee} from "../../Reservation";

@Component({
  selector: 'app-attendee-item',
  templateUrl: './attendee-item.component.html',
  styleUrls: ['./attendee-item.component.css']
})
export class AttendeeItemComponent implements OnInit {

  @Input() attendee?: Attendee;

  constructor() { }

  ngOnInit(): void {
  }

}
