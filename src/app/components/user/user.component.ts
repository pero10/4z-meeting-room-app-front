import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../User";
import {ActivatedRoute} from "@angular/router";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";

@UntilDestroy()
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser ?: User;

  regularModalVisible: boolean = false;
  editModalVisible: boolean = false;
  searchUserComponentVisible: boolean = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => (this.users = users)
    );

    this.activatedRoute.queryParams.pipe(
      untilDestroyed(this),
      tap(params=>
      this.searchUser(params)
      )
    ).subscribe();
  }

  searchUser(searchUserData: any) {
    this.userService
      .searchUser(searchUserData)
      .subscribe(
        searchedUser => this.users = searchedUser
      );
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(
      () => (this.users = this.users.filter(u => u.id !== user.id))
    );
  }

  onModalToggle(user: User) {
    this.regularModalVisible = true;
    this.selectedUser = user;
  }

  deleteTrigger(user: User) {
    this.deleteUser(user);
    this.regularModalVisible = true;
  }


  onSubmitEditForm(user: User) {
    this.editModalVisible = false;
    this.userService.editUser(user).subscribe();
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  editModalToggle(user: User) {
    this.editModalVisible = true;
    this.selectedUser = user;
  }

  toggleSearchUser() {
    this.searchUserComponentVisible = !this.searchUserComponentVisible;
  }
}
