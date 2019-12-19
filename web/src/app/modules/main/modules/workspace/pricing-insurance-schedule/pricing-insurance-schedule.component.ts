import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SchemaSectionModel } from 'src/app/models/schema-section.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReferentialLookupService } from 'src/app/services/referential-lookup.service';

@Component({
  selector: 'abacus-pricing-insurance-schedule',
  templateUrl: './pricing-insurance-schedule.component.html',
  styleUrls: ['./pricing-insurance-schedule.component.scss']
})
export class PricingInsuranceScheduleComponent implements OnInit {

  @Input() metadata: any[];
  @Input() sectionSchema: SchemaSectionModel;
  @Output() save: EventEmitter<any> = new EventEmitter();

  insuranceScheduleForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _referentialLookupService: ReferentialLookupService) { }

  ngOnInit() {
    this.initializeMetadata();
    this.buildForm();
  }

  buildForm() {
    this.insuranceScheduleForm = this._formBuilder.group({});

    for (const field of this.sectionSchema.fields) {
      this.insuranceScheduleForm.addControl(field.name, this._formBuilder.control(null, field.isRequired ? [Validators.required] : []));

      if (field.relatedField) {
        this.insuranceScheduleForm.get(field.name).valueChanges.subscribe(val => {
          const newValue = {};
          newValue[field.relatedField] = val ? this._referentialLookupService.getLabel(field.lookup, val) : '';
          this.insuranceScheduleForm.patchValue(newValue);
        });
      }
    }
  }

  initializeMetadata() {
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
    this.clear();
  }

  clear() {
    this.insuranceScheduleForm.reset();
  }

  done() {
    this.save.emit(this.metadata);
  }

}
