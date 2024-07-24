import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproviderComponent } from './addprovider/addprovider.component';
import { DeleteproviderComponent } from './deleteprovider/deleteprovider.component';
import { ModuleARoutingModule } from './provider-routing.module';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AddproviderComponent,
    DeleteproviderComponent
  ],
  imports: [
    CommonModule,
    ModuleARoutingModule,
    NgSelectModule
  ]
})
export class ProviderModule { }
