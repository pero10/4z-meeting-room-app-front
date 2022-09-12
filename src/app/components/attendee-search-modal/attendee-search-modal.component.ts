import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../User";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs";

@Component({
  selector: 'app-attendee-search-modal',
  templateUrl: './attendee-search-modal.component.html',
  styleUrls: ['./attendee-search-modal.component.css']
})
export class AttendeeSearchModalComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  attendees: User[] = [];
  reservationID?:number;
  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      tap(result=>{
        console.log(result);
      }),
      switchMap(params=>{
        return this.userService.getUsersInReservationRange(params['id']);
        }
      ),
      tap(result=>{
        this.attendees = result;
        console.log(result);
      })
    ).subscribe();
  }


  onClose() {
    this.close.emit(true);
  }
}
