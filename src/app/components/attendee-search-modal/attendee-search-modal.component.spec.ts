import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeSearchModalComponent } from './attendee-search-modal.component';

describe('AttendeeSearchModalComponent', () => {
  let component: AttendeeSearchModalComponent;
  let fixture: ComponentFixture<AttendeeSearchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendeeSearchModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
