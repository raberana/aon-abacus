import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingClientInfoComponent } from './pricing-client-info.component';

describe('PricingClientInfoComponent', () => {
  let component: PricingClientInfoComponent;
  let fixture: ComponentFixture<PricingClientInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingClientInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
