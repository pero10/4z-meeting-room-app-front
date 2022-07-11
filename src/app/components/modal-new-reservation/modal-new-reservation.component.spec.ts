import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewReservationComponent } from './modal-new-reservation.component';

describe('ModalNewReservationComponent', () => {
  let component: ModalNewReservationComponent;
  let fixture: ComponentFixture<ModalNewReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
