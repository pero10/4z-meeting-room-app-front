import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntilDestroy, } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-attendee-search-modal',
  templateUrl: './attendee-search-modal.component.html',
  styleUrls: ['./attendee-search-modal.component.css']
})
export class AttendeeSearchModalComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  reservationID?:number;
  possibleAttendees$: any;

  constructor( ) { }

  ngOnInit(): void { }


  onClose() {
    this.close.emit(true);
  }
}
