import { Component, OnInit, Input } from '@angular/core';
import { SchemaSectionModel } from 'src/app/models/schema-section.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'abacus-pricing-client-info',
  templateUrl: './pricing-client-info.component.html',
  styleUrls: ['./pricing-client-info.component.scss']
})
export class PricingClientInfoComponent implements OnInit {

  @Input() metadata: any;
  @Input() sectionSchema: SchemaSectionModel;

  pricingForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.pricingForm = this._formBuilder.group({});

    for (const field of this.sectionSchema.fields) {
      const formValue = this.metadata ? this.metadata[field.name] : null;
      this.pricingForm.addControl(field.name, this._formBuilder.control(formValue));
    }

    if (!this.metadata) {
      this.metadata = {};
      for (const field of this.sectionSchema.fields) {
        this.metadata[field.name] = null;
      }
    }
  }

  get(){
    console.log(this.pricingForm.getRawValue());
  }

}
