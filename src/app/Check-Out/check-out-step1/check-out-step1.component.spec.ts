import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutStep1Component } from './check-out-step1.component';

describe('CheckOutStep1Component', () => {
  let component: CheckOutStep1Component;
  let fixture: ComponentFixture<CheckOutStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
