import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSummaryComponent } from './pricing-summary.component';

describe('PricingSummaryComponent', () => {
  let component: PricingSummaryComponent;
  let fixture: ComponentFixture<PricingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
