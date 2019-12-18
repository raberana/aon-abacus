import { Component, OnInit, Input } from '@angular/core';
import { SchemaSectionModel } from 'src/app/models/schema-section.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'abacus-pricing-insurance-schedule',
  templateUrl: './pricing-insurance-schedule.component.html',
  styleUrls: ['./pricing-insurance-schedule.component.scss']
})
export class PricingInsuranceScheduleComponent implements OnInit {

  @Input() metadata: any[];
  @Input() sectionSchema: SchemaSectionModel;

  insuranceScheduleForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.insuranceScheduleForm = this._formBuilder.group({});

    for (const field of this.sectionSchema.fields) {
      this.insuranceScheduleForm.addControl(field.name, this._formBuilder.control(null));
    }

    if (!this.metadata) {
      this.metadata = [];
    }
  }

  add() {
    const newInsuranceSchedule = {};
    for (const field of this.sectionSchema.fields) {
      newInsuranceSchedule[field.name] = this.insuranceScheduleForm.get(field.name).value;
    }
    this.metadata.push(newInsuranceSchedule);
    console.log(this.insuranceScheduleForm.getRawValue());
  }

  clear() {
    this.insuranceScheduleForm.reset();
  }

}
