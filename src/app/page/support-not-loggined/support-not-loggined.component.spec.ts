import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNotLogginedComponent } from './support-not-loggined.component';

describe('SupportNotLogginedComponent', () => {
  let component: SupportNotLogginedComponent;
  let fixture: ComponentFixture<SupportNotLogginedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportNotLogginedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportNotLogginedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
