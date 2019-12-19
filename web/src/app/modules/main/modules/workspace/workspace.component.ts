import { Component, OnInit } from '@angular/core';
import { SchemaModel } from 'src/app/models/schema.model';
import { FormGroup } from '@angular/forms';
import { SchemaService } from 'src/app/services/schema-service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  pricingSchema: SchemaModel;
  pricingData: any = {};
  steps: any[] = [];
  currentStep: any;
  calculationTrigger: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _schemaService: SchemaService) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.setupSteps();
    this.currentStep = this.steps[0];
    this.initializeSchema();
  }

  initializeSchema() {
    this._schemaService.getSchema('pricingSchema')
      .subscribe(i => {
        this.pricingSchema = i;
        console.log('SCHEMA', this.pricingSchema);
      });
  }

  setupSteps() {
    this.steps = [
      {
        title: 'Client Information',
        description: [`Using the client's information, this tool produces a target price and hours to serve utilizing premium by line of business contained in Aon’s policy management system and Aon’s time tracking data against a national benchmark.`],
        image: 'assets/images/workspace-client-info.svg',
        step: 1
      },
      {
        title: 'Insurance Schedule',
        description: [`For broking placed lines, please enter full premium amount relating to Broking Center on new row.`, `Please enter commission capped client and commission offsets as fee clients.`],
        image: 'assets/images/workspace-insurance-schedule.svg',
        step: 2
      },
      {
        title: 'Summary',
        description: [`This tool produces a target price and hours to serve utilizing premium by line of business contained in Aon’s policy management system and Aon’s time tracking data against a national benchmark.`],
        image: 'assets/images/workspace-summary.svg',
        step: 3
      },
    ];
  }

  goStep(nextStep) {
    if ((nextStep.step > this.currentStep.step) && (!this.pricingData[this.pricingSchema.sections[(this.currentStep.step - 1)].name]
      || this.pricingData[this.pricingSchema.sections[(this.currentStep.step - 1)].name].length == 0)) {
      return;
    }
    this.currentStep = nextStep;
    this.calculationTrigger.next(this.currentStep.step == 3);
  }

  onSave(section, $event) {
    this.pricingData[section] = $event;
    this.goStep(this.steps.find(i => i.step == (this.currentStep.step + 1)));
  }
}
