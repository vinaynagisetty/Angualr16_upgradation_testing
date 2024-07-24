import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { UsermangementComponent } from './usermangement/usermangement.component';
import { ModuleBRoutingModule } from './setting-routing.module';



@NgModule({
  declarations: [
    HistoryComponent,
    UsermangementComponent
  ],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class SettingModule { }
