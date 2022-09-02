import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeItemComponent } from './attendee-item.component';

describe('AttendeeItemComponent', () => {
  let component: AttendeeItemComponent;
  let fixture: ComponentFixture<AttendeeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendeeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
