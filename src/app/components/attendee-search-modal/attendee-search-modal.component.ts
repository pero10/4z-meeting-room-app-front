import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../User";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription, switchMap, tap} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-attendee-search-modal',
  templateUrl: './attendee-search-modal.component.html',
  styleUrls: ['./attendee-search-modal.component.css']
})
export class AttendeeSearchModalComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  unsub:Subscription|undefined;
  attendees: User[] = [];
  reservationID?:number;

  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      untilDestroyed(this),
      // tap(result=>{
      //   console.log(result);
      // }),
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

  ngOnDestroy(){

  }

  onClose() {
    this.close.emit(true);
  }
}
