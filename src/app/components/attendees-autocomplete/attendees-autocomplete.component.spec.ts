import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeesAutocompleteComponent } from './attendees-autocomplete.component';

describe('AttendeesAutocompleteComponent', () => {
  let component: AttendeesAutocompleteComponent;
  let fixture: ComponentFixture<AttendeesAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendeesAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
