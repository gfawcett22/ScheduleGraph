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
export var ScheduleComponent = (function () {
    function ScheduleComponent(_scheduleService) {
        this._scheduleService = _scheduleService;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var monday = this.getMonday();
        var sunday = new Date(monday.getDate() + 1);
        this._scheduleService.getRuns(monday, sunday)
            .subscribe(function (runs) { return _this.runs = runs; }, function (error) { return _this.errorMessage = error; });
    };
    ScheduleComponent.prototype.getMonday = function () {
        var d = new Date();
        var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    };
    ScheduleComponent.prototype.showRuns = function () {
        console.log(this.runs);
    };
    ScheduleComponent.prototype.reloadSchedule = function () {
        var _this = this;
        console.log("start date " + this.startDate);
        console.log("end date " + this.endDate);
        this._scheduleService.getRuns(this.startDate, this.endDate)
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
//# sourceMappingURL=E:/User/Documents/ScheduleGraph/src/src/app/schedule/schedule.component.js.map