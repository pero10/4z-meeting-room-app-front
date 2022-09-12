import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomService} from "../../services/room.service";
import {Room} from "../../Room";
import {LoginData} from "../../LoginData";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {Observable, tap} from "rxjs";

@UntilDestroy()
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {
  @Input() room?: Room;
  rooms$?:Observable<Room[]>;
  selectedRoom?: Room;
  regularModalVisible: boolean = false;
  insertModalVisible: boolean = false;
  editModalVisible: boolean = false;

  currentUser?: LoginData | any;
  searchRoomComponentVisible: boolean = false;

  @Output() filterParams: EventEmitter<any> = new EventEmitter<any>();

  params: any[] = [];

  constructor(private roomService: RoomService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.authService.currentUserData.pipe(
      untilDestroyed(this),
      tap((user) =>
        this.currentUser = user
      )
    ).subscribe();

    this.activatedRoute.queryParams.pipe(
      untilDestroyed(this),
      tap(params => {
          this.rooms$ = this.roomService.searchRoom(params)
        }
      )
    ).subscribe();
  }

  // searchRoom(searchRoomData: any) {
  //   this.roomService.searchRoom(searchRoomData)
  //     .subscribe(
  //       searchedRoom => this.rooms = searchedRoom
  //     );
  // }

  deleteRoom(room: Room) {
    this.roomService.deleteRoom(room);
  }

  onSubmitEditForm(room: Room) {
    this.editModalVisible = false;
    this.roomService.editRoom(room).subscribe();
    this.roomService.getRooms().subscribe();
  }

  onModalToggle(room: Room) {
    this.regularModalVisible = true;
    this.selectedRoom = room;
  }

  editModalToggle(room: Room) {
    this.editModalVisible = true;
    this.selectedRoom = room;
  }

  deleteTrigger(room: Room) {
    this.regularModalVisible = false;
    this.deleteRoom(room);
  }

  toggleInsertRoomModal() {
    this.insertModalVisible = true;
    this.searchRoomComponentVisible = false;
    this.rooms$ = this.roomService.getRooms();
  }

  toggleRoomSearch() {
    this.searchRoomComponentVisible = !this.searchRoomComponentVisible;
  }

  addNewRoom(room: Room) {
    this.roomService.addNewRoom(room).subscribe(
      room => this.rooms$ = room
    );
  }
}
