import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../Reservation";
import {User} from "../../User";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() user?: User;
  editUserForm: FormGroup;
  @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submit:EventEmitter<User> = new EventEmitter<User>();

  constructor() {
    this.editUserForm = new FormGroup ({
      'id': new FormControl(),
      'email': new FormControl(),
      'firstName': new FormControl(),
      'lastName': new FormControl(),
      'phone': new FormControl()
    })
  }

  ngOnInit(): void {
    if(this.user){
      this.editUserForm.patchValue(this.user);
    }
  }

  onClose(){
    this.close.emit(true);
  }

  onSubmit() {
    this.submit.emit(this.editUserForm.value);
  }

}
