import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { PricingClientInfoComponent } from './pricing-client-info/pricing-client-info.component';
import { PricingInsuranceScheduleComponent } from './pricing-insurance-schedule/pricing-insurance-schedule.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [WorkspaceComponent, PricingClientInfoComponent, PricingInsuranceScheduleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkspaceRoutingModule,
    SharedModule
  ]
})
export class WorkspaceModule { }
