import {Component, Input, OnInit} from '@angular/core';
import {Attendee} from "../../Reservation";

@Component({
  selector: 'app-pending-attendee',
  templateUrl: './pending-attendee.component.html',
  styleUrls: ['./pending-attendee.component.css']
})
export class PendingAttendeeComponent implements OnInit {

  @Input() pendingAttendee?: Attendee;


  constructor() { }

  ngOnInit(): void {
  }

}
