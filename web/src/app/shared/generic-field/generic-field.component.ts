import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SchemaFieldModel } from 'src/app/models/schema-field';
import { FormGroup } from '@angular/forms';
import { ReferentialLookupService } from 'src/app/services/referential-lookup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'abacus-generic-field',
  templateUrl: './generic-field.component.html',
  styleUrls: ['./generic-field.component.scss']
})
export class GenericFieldComponent implements OnInit, OnDestroy {

  @Input() field: SchemaFieldModel;
  @Input() formGroup: FormGroup;

  options: any[];
  referentialSubscription: Subscription;

  constructor(private _referentialService: ReferentialLookupService) { }

  ngOnInit() {
    if (this.field.dataType == 'options') {
      this.referentialSubscription = this._referentialService.getReferentialLookup(this.field.lookup)
        .subscribe(i => {
          console.log('i', i);
          this.options = i.map<{ value: string, label: string }>(r => { return { value: r.value, label: r.label } });
          console.log('options', this.options);
        });
    }
  }

  ngOnDestroy() {
    if (this.referentialSubscription) { this.referentialSubscription.unsubscribe(); }
  }
}
