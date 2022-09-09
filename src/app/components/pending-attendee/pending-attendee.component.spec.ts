import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAttendeeComponent } from './pending-attendee.component';

describe('PendingAttendeeComponent', () => {
  let component: PendingAttendeeComponent;
  let fixture: ComponentFixture<PendingAttendeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAttendeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
