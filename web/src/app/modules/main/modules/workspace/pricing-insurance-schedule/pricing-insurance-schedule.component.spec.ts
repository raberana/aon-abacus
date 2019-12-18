import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingInsuranceScheduleComponent } from './pricing-insurance-schedule.component';

describe('PricingInsuranceScheduleComponent', () => {
  let component: PricingInsuranceScheduleComponent;
  let fixture: ComponentFixture<PricingInsuranceScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingInsuranceScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingInsuranceScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
