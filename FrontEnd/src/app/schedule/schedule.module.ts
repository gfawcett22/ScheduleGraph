/**
 * Created by User on 12/18/16.
 */
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePickerModule} from 'ng2-datepicker';
import {ScheduleComponent} from './schedule.component';
import {ScheduleService} from "./schedule.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:[CommonModule,FormsModule, DatePickerModule],
  exports:[ScheduleComponent],
  declarations:[ScheduleComponent],
  providers:[ScheduleService]
})
export class ScheduleModule{}
