import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../User";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users)=> (this.users = users)
    );
  }

  deleteUser(user:User){
    this.userService.deleteUser(user).subscribe(
      () => (this.users = this.users.filter(u => u.id !== user.id))
    );
  }

}
