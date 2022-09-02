import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../User";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  @Output() searchOnSubmit: EventEmitter<User> = new EventEmitter<User>();
  @Output() showUserSearch: EventEmitter<User> = new EventEmitter();

  searchUserForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.searchUserForm = new FormGroup({
      email:new FormControl(),
      firstName:new FormControl(),
      lastName:new FormControl(),
      phone:new FormControl()
    });
  }

  clearFilters() {
    this.searchUserForm.reset();
    this.onSubmit();
  }

  onSubmit() {
    this.searchOnSubmit.emit(this.searchUserForm.value);
  }
}
