import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'abacus-pricing-summary',
  templateUrl: './pricing-summary.component.html',
  styleUrls: ['./pricing-summary.component.scss']
})
export class PricingSummaryComponent implements OnInit {

  @Input('price-input') priceInput: any;
  @Input('calculation-trigger') calculationTrigger: BehaviorSubject<boolean> = new BehaviorSubject(false);

  priceOutput: any;

  constructor(private _calculatorService: CalculatorService) { }

  ngOnInit() {
    this.calculationTrigger.subscribe(shouldCalculate => {
      if (shouldCalculate) {
        this._calculatorService.calculate(this.priceInput).subscribe(i => {
          this.priceOutput = i;
        });
      }
    });
  }

}
