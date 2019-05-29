import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutFinalStepComponent } from './check-out-final-step.component';

describe('CheckOutFinalStepComponent', () => {
  let component: CheckOutFinalStepComponent;
  let fixture: ComponentFixture<CheckOutFinalStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutFinalStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutFinalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
