import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../User";
import {UserService} from "../../services/user.service";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable, tap} from "rxjs";
import {logExperimentalWarnings} from "@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-attendees-autocomplete',
  templateUrl: './attendees-autocomplete.component.html',
  styleUrls: ['./attendees-autocomplete.component.css']
})
export class AttendeesAutocompleteComponent implements OnInit {
  @Input() user ?: User;
  users? : User[] = [];

  myControl = new FormControl<string>('');
  filteredUsers?: Observable<User[]>;
  attendee: any;
  reservationID?:number;

  constructor(
    private userService: UserService,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(
    //   params =>
    //     {
    //       if(params['id']){
    //         this.reservationID=params['id'];
    //       }
    //     }
    // );
    this.userService.getUsers().subscribe(
      (users) => this.users = users
    );
    this.filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterUsers(value||''))
    );
  }

  displayFn(user: User):string{
    console.log(user);
    return user ? user.email : "";
  }

  private filterUsers(value: string): User[]
  {
    const filterValue = value.toLowerCase();
    return this.users!.filter(
      option =>
        option.email.toLowerCase().includes(filterValue));
  }
}
