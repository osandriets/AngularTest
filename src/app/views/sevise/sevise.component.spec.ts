import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeviseComponent } from './sevise.component';

describe('SeviseComponent', () => {
  let component: SeviseComponent;
  let fixture: ComponentFixture<SeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
