import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomReservationsModalComponent } from './room-reservations-modal.component';

describe('RoomReservationsModalComponent', () => {
  let component: RoomReservationsModalComponent;
  let fixture: ComponentFixture<RoomReservationsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomReservationsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomReservationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
