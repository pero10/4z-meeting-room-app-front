import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComingComponent } from './user-coming.component';

describe('UserComingComponent', () => {
  let component: UserComingComponent;
  let fixture: ComponentFixture<UserComingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
