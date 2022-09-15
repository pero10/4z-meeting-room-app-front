import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../User";
import {UserService} from "../../services/user.service";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable, tap} from "rxjs";
import {logExperimentalWarnings} from "@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings";

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => this.users = users
    );
    const filtered = this.myControl.valueChanges.pipe(
      tap(console.log),
      startWith('')
      // map(value => this._filter(value))
    )
  }

  displayFn(user: User):string{
    // return user ? user.firstName + " " + user.lastName : "";
    return user ? user.email : "";
  }

  private _filter(value: string): User[]{
    const filterValue = value.toLowerCase();
    // console.log(this.users);
    return this.users!.filter(user =>
      user.email.toLowerCase().includes(filterValue)
    );
  }
}
