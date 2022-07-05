import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTempComponent } from './modal-temp.component';

describe('ModalTempComponent', () => {
  let component: ModalTempComponent;
  let fixture: ComponentFixture<ModalTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
