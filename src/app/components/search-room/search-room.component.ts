import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Room} from "../../Room";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent implements OnInit {

  @Output() searchOnSubmit: EventEmitter<Room> = new EventEmitter<Room>();
  @Output() showRoomSearch: EventEmitter<Room> = new EventEmitter();
  @Input() filterParams: EventEmitter<any> = new EventEmitter();

  searchRoomForm!: FormGroup;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.searchRoomForm! = new FormGroup({
      name: new FormControl(),
      location: new FormControl(),
      capacity: new FormControl(),
      tv: new FormControl(),
      whiteboard: new FormControl(),
      videocall: new FormControl()
    });

  }

  clearFilters() {
    this.searchRoomForm.reset();
    this.onSubmit();
  }

  onSubmit() {
    this.router.navigate(
      ['/dashboard/room'],
      {queryParams: this.formGroupAdapter(this.searchRoomForm.value)}
    );
  }

  toggleRoomSearch(room?: Room) {
    this.showRoomSearch.emit(room);
  }

  formGroupAdapter(formGroup: any): any {
      Object.keys(formGroup).forEach(key => {
        if (formGroup[key] !== null)
        {
          if (typeof formGroup[key] === "boolean")
          {
            formGroup[key] = formGroup[key] ? 1 : 0;
          }
        }
      });

    return formGroup;
  }
}
