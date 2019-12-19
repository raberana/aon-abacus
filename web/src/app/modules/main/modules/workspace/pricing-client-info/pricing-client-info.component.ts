import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SchemaSectionModel } from 'src/app/models/schema-section.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReferentialLookupService } from 'src/app/services/referential-lookup.service';

@Component({
  selector: 'abacus-pricing-client-info',
  templateUrl: './pricing-client-info.component.html',
  styleUrls: ['./pricing-client-info.component.scss']
})
export class PricingClientInfoComponent implements OnInit {

  @Input() metadata: any;
  @Input() sectionSchema: SchemaSectionModel;
  @Output() save: EventEmitter<any> = new EventEmitter();

  pricingForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _referentialLookupService: ReferentialLookupService) {

  }

  ngOnInit() {
    this.initializeMetadata();
    this.buildForm();
  }

  buildForm() {
    this.pricingForm = this._formBuilder.group({});

    for (const field of this.sectionSchema.fields) {
      const formValue = this.metadata ? this.metadata[field.name] : null;
      this.pricingForm.addControl(field.name, this._formBuilder.control(formValue, field.isRequired ? [Validators.required] : []));

      if (field.relatedField) {
        this.pricingForm.get(field.name).valueChanges.subscribe(val => {
          const newValue = {};
          newValue[field.relatedField] = val ? this._referentialLookupService.getLabel(field.lookup, val) : '';
          this.pricingForm.patchValue(newValue);
        });
      }
    }
  }

  initializeMetadata() {
    if (!this.metadata) {
      this.metadata = {};
      for (const field of this.sectionSchema.fields) {
        this.metadata[field.name] = null;
      }
    }
  }

  setupDependencies() {

  }

  done() {
    this.metadata = this.pricingForm.getRawValue();
    this.save.emit(this.metadata);
  }

  clear() {
    this.pricingForm.reset();
  }

}
