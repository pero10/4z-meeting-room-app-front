import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewRoomComponent } from './modal-new-room.component';

describe('ModalNewRoomComponent', () => {
  let component: ModalNewRoomComponent;
  let fixture: ComponentFixture<ModalNewRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
