import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSmComponent } from './user-sm.component';

describe('UserSmComponent', () => {
  let component: UserSmComponent;
  let fixture: ComponentFixture<UserSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
