import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntilDestroy, untilDestroyed,} from "@ngneat/until-destroy";
import {User} from "../../User";
import {FormControl} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {UserService} from "../../services/user.service";
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {map, startWith} from "rxjs/operators";
import {AddAttendee} from "../../AddAttendee";
import {Reservation} from "../../Reservation";

@UntilDestroy()
@Component({
  selector: 'app-attendee-search-modal',
  templateUrl: './attendee-search-modal.component.html',
  styleUrls: ['./attendee-search-modal.component.css']
})
export class AttendeeSearchModalComponent implements OnInit {
  @Input() capacity!: number;
  @Input() sumOfAttendees!: number;
  @Input() reservation!: Reservation;

  @Output() onAddUserToReservation = new EventEmitter<AddAttendee>();
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() user ?: User;
  users?: User[] = [];

  myControl = new FormControl<string>('');
  filteredUsers?: Observable<User[]>;
  reservationID!: number;
  unavailableUserIds?: Number[] = [];

  constructor(
    private userService: UserService,
    private reservationService: ReservationService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(
    //   params => {
    //     if (params['id'])
    //     {
    //       this.availableUsersIDs$ = this.userService.getUsersInReservationRange(params['id']);
    //       this.reservationID = params['id'];
    //     }
    //   }
    // );

    this.activatedRoute.queryParams.pipe(
      untilDestroyed(this),
      tap(params => {
          if (params['id']) {
            this.reservationID = params['id'];
            if(params['started_at'] && params['finished_at']){
            this.userService.getUsersInReservationRange(
              params['started_at'],
              params['finished_at'],
              params['id']
            ).subscribe(
              availableUsers => {
                this.users = availableUsers;
              }
            );
            }
          }
        }
      )
    ).subscribe();

    this.filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      map(
        value =>
          this.filterUsers(value || '')
      )
    );
  }

  displayFn(user: User) {
    return user ? user.email : "";
  }

  private filterUsers(value: any): User[] {
    return this.users!.filter(
      option =>
        option.email.toLowerCase().includes(value.toString().toLowerCase())
    );
  }

  callUserToReservation(user: User) {
    if (this.sumOfAttendees < this.capacity) {
      if (user.id != null) {
        this.users = this.users?.filter(exactUser => exactUser !== user);
        alert(user.firstName + ' is successfully added to the reservation!');

        this.onAddUserToReservation.emit(
          {
            userID: user.id,
            reservationID: this.reservationID
          }
        );
      }
    } else {
      alert('You reached maximum number of attendees for this room.');
    }
  }

  onClose() {
    this.close.emit(true);
  }
}
