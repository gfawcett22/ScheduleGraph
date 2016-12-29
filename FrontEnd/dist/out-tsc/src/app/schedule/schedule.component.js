var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ScheduleService } from "./schedule.service";
import { DateModel } from 'ng2-datepicker';
export var ScheduleComponent = (function () {
    function ScheduleComponent(_scheduleService) {
        this._scheduleService = _scheduleService;
        this.calendarOptions = {
            format: "MM-DD-YYYY",
            firstWeekdaySunday: false,
            autoApply: true,
            yearPicker: false,
        };
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.startDate = this.getMonday();
        this.endDate = this.getSunday(this.startDate);
        // this._scheduleService.getRuns(monday, sunday)
        //   .subscribe(runs => this.runs = runs,
        //       error => this.errorMessage = <any>error
        //   );
        this.reloadSchedule();
    };
    ScheduleComponent.prototype.getMonday = function () {
        var d = new Date();
        var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        //return new Date(d.setDate(diff));
        var monday = new Date(d.setDate(diff));
        var returnModel = new DateModel();
        returnModel = this.convertDateToDateModel(monday);
        return returnModel;
    };
    ScheduleComponent.prototype.getSunday = function (monday) {
        var mondayDate = new Date(monday.formatted);
        var sundayDate = new Date(mondayDate.getDate() + 1);
        var sunday = new DateModel();
        sunday = this.convertDateToDateModel(sundayDate);
        return sunday;
    };
    ScheduleComponent.prototype.convertDateToDateModel = function (date) {
        var returnModel = new DateModel();
        returnModel.day = date.getDay().toString();
        returnModel.month = date.getMonth().toString();
        returnModel.year = date.getFullYear().toString();
        returnModel.formatted = returnModel.month + '-' + returnModel.day + '-' + returnModel.year;
        return returnModel;
    };
    ScheduleComponent.prototype.getDaysBetweenDates = function () {
        var count = 0;
        //for now just calculate difference between days, eventually this will be months years, etc.
        count = +this.endDate.day - +this.startDate.day;
        return count;
    };
    ScheduleComponent.prototype.showRuns = function () {
        console.log(this.runs);
    };
    ScheduleComponent.prototype.reloadSchedule = function () {
        var _this = this;
        console.log("start date " + this.startDate);
        console.dir(this.startDate);
        console.log("end date " + this.endDate);
        //console.dir(this.endDate);
        this._scheduleService.getRuns(this.startDate || new DateModel(), this.endDate || new DateModel())
            .subscribe(function (runs) { return _this.runs = runs; }, function (error) { return _this.errorMessage = error; });
    };
    ScheduleComponent = __decorate([
        Component({
            selector: 'app-schedule',
            templateUrl: './schedule.component.html',
            styleUrls: ['./schedule.component.css']
        }), 
        __metadata('design:paramtypes', [ScheduleService])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
//# sourceMappingURL=E:/User/Documents/ScheduleGraph/FrontEnd/src/src/app/schedule/schedule.component.js.map