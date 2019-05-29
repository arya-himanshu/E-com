import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutStep2Component } from './check-out-step2.component';

describe('CheckOutStep2Component', () => {
  let component: CheckOutStep2Component;
  let fixture: ComponentFixture<CheckOutStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
