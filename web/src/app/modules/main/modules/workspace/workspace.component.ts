import { Component, OnInit } from '@angular/core';
import { SchemaModel } from 'src/app/models/schema.model';
import { FormGroup } from '@angular/forms';
import { SchemaService } from 'src/app/services/schema-service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  pricingSchema: SchemaModel;
  pricingData: any = {};
  pricingForm: FormGroup;
  page: number = 1;

  constructor(private _schemaService: SchemaService) { }

  ngOnInit() {
    this.page = 1;
    
    this._schemaService.getSchema('pricingSchema').subscribe(i => this.pricingSchema = i);
    
    // this.pricingSchema.name = 'PricingSchema';

    // const clientInfoSection = new SchemaSectionModel();
    // clientInfoSection.name = 'clientInfo';
    // clientInfoSection.isArray = false;

    // clientInfoSection.fields = [
    //   { name: 'clientName', dataType: 'text', label: 'Client Name' },
    //   { name: 'clientIndustry', dataType: 'options', label: 'Client Industry', lookup: 'CLIENTINDUSTRIES' },
    //   { name: 'priorYearPrice', dataType: 'number', label: 'Prior Year Price (US$)' },
    //   { name: 'aGRCHours', dataType: 'number', label: 'AGRC (Hours)' },
    //   { name: 'dataAnalyticsCharge', dataType: 'number', label: 'Data & Analytics Charge (US$)' },
    //   { name: 'aGCNCharge', dataType: 'number', label: 'AGCN Charge (Per RAN, US$)' },
    // ];

    // const insuranceScheduleSection = new SchemaSectionModel();
    // insuranceScheduleSection.name = 'insuranceSchedule';
    // insuranceScheduleSection.isArray = true;

    // insuranceScheduleSection.fields = [
    //   { name: 'businessLine', dataType: 'options', label: 'Line of Business', lookup: 'BUSINESSLINES' },
    //   { name: 'premium', dataType: 'number', label: 'Premium Amount (US$)' },
    //   { name: 'policyCount', dataType: 'number', label: 'Number of Policies' },
    //   { name: 'remunerationType', dataType: 'options', label: 'Remuneration Type', lookup: 'REMUNERATIONTYPES' },
    //   { name: 'brokingCenter', dataType: 'options', label: 'Broking Center', lookup: 'BROKINGCENTERS' },
    // ];

    // this.pricingSchema.sections = [clientInfoSection, insuranceScheduleSection];

    console.log('SCHEMA', this.pricingSchema);


  }

  next() {
    this.page++;
    if (this.page > 3) {
      this.page = 1;
    }
  }

}
