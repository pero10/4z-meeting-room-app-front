import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAttendeeComponent } from './reservation-attendee.component';

describe('ReservationAttendeeComponent', () => {
  let component: ReservationAttendeeComponent;
  let fixture: ComponentFixture<ReservationAttendeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAttendeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
