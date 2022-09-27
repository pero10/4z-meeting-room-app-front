import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInviteComponent } from './user-invite.component';

describe('UserInviteComponent', () => {
  let component: UserInviteComponent;
  let fixture: ComponentFixture<UserInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
