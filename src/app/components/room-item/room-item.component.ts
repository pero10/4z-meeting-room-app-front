import { Component, OnInit, Input, Output } from '@angular/core';
import {Room} from "../../Room";

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() room?:Room

  constructor() { }

  ngOnInit(): void {
  }

}
