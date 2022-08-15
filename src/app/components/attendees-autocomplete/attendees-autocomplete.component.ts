import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../User";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-attendees-autocomplete',
  templateUrl: './attendees-autocomplete.component.html',
  styleUrls: ['./attendees-autocomplete.component.css']
})
export class AttendeesAutocompleteComponent implements OnInit {
  @Input() user ?: User;
  users? : User[] = [];

  myControl = new FormControl;
  filteredUsers?: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => this.users = users
    );
    this.filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  displayFn(user: User):string{
    return user ? user.firstName + " " + user.lastName : "";
  }

  private _filter(value: string): User[]{
    const filterValue = value.toLowerCase();
    console.log(this.users);
    return this.users!.filter(user => user.firstName.toLowerCase().includes(filterValue)
      || user.lastName.toLowerCase().includes((filterValue)));
  }


}
