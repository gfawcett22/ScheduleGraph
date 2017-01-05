/**
 * Created by User on 12/18/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DatePickerModule} from 'ng2-datepicker';
import {ScheduleComponent} from './schedule.component';
import {ScheduleService} from "./schedule.service";
import {FormsModule} from "@angular/forms";
import {RunComponent} from "./run.component";

@NgModule({
  imports:[BrowserModule,FormsModule, DatePickerModule],
  exports:[ScheduleComponent],
  declarations:[ScheduleComponent, RunComponent],
  providers:[ScheduleService]
})
export class ScheduleModule{}
