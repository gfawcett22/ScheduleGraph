import {Component, OnInit} from '@angular/core';
import {IRun} from "./run";
import {ScheduleService} from "./schedule.service";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  startDate: Date;
  endDate: Date;
  //each day is an array of runs, thus the date range is an array of run arrays
  runs: IRun[];
  errorMessage: string;

  constructor(private _scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    let monday = this.getMonday();
    let sunday = new Date(monday.getDate() + 1);
    this._scheduleService.getRuns(monday, sunday)
      .subscribe(runs => this.runs = runs,
          error => this.errorMessage = <any>error
      );
  }

  getMonday(): Date {
    let d = new Date();
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }
  showRuns():void{
    console.log(this.runs);
  }
  reloadSchedule(){
    console.log("start date " + this.startDate);
    console.log("end date " + this.endDate);
    this._scheduleService.getRuns(this.startDate, this.endDate)
      .subscribe(runs => this.runs = runs,
        error => this.errorMessage = <any>error
      );
  }
}
