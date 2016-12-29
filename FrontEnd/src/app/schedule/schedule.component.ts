import {Component, OnInit, Output} from '@angular/core';
import {IRun} from "./run";
import {ScheduleService} from "./schedule.service";
import{DateModel} from 'ng2-datepicker';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  startDate: DateModel;
  endDate: DateModel;
  //each day is an array of runs, thus the date range is an array of run arrays
  runs: IRun[];
  errorMessage: string;
  calendarOptions = {
    format:"MM-DD-YYYY",
    firstWeekdaySunday:false,
    autoApply:true,
    yearPicker:false,
  };

  constructor(private _scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    this.startDate = this.getMonday();
    this.endDate = this.getSunday(this.startDate);
    // this._scheduleService.getRuns(monday, sunday)
    //   .subscribe(runs => this.runs = runs,
    //       error => this.errorMessage = <any>error
    //   );
    this.reloadSchedule();
  }

  getMonday(): DateModel {
    let d = new Date();
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    //return new Date(d.setDate(diff));
    let monday = new Date(d.setDate(diff));
    let returnModel = new DateModel();
    returnModel = this.convertDateToDateModel(monday);
    return returnModel;
  }
  getSunday(monday: DateModel):DateModel{
    let mondayDate = new Date(monday.formatted);
    let sundayDate = new Date(mondayDate.getDate() + 1);
    let sunday = new DateModel();
    sunday = this.convertDateToDateModel(sundayDate);
    return sunday;
  }
  convertDateToDateModel(date:Date):DateModel{
    var returnModel = new DateModel();
    returnModel.day = date.getDay().toString();
    returnModel.month = date.getMonth().toString();
    returnModel.year = date.getFullYear().toString();
    returnModel.formatted = returnModel.month + '-' + returnModel.day + '-' + returnModel.year;
    return returnModel;
  }
  getDaysBetweenDates():number{
    let count = 0;
    //for now just calculate difference between days, eventually this will be months years, etc.
    count = +this.endDate.day - +this.startDate.day;
    return count;
  }
  showRuns():void{
    console.log(this.runs);
  }
  reloadSchedule(){
    console.log("start date " + this.startDate);
    console.dir(this.startDate);
    console.log("end date " + this.endDate);
    //console.dir(this.endDate);
    this._scheduleService.getRuns(this.startDate || new DateModel(), this.endDate || new DateModel())
      .subscribe(runs => this.runs = runs,
        error => this.errorMessage = <any>error
      );
  }
}
