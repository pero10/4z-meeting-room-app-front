import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Room} from "../../Room";

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent implements OnInit {

  @Output() searchOnSubmit: EventEmitter<Room> = new EventEmitter<Room>();
  @Output() showRoomSearch: EventEmitter<Room> = new EventEmitter();

  searchRoomForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.searchRoomForm = new FormGroup({
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
    this.searchOnSubmit.emit(this.searchRoomForm.value);
  }

  toggleRoomSearch(room?:Room){
    this.showRoomSearch.emit(room);
  }
}
