var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export var ScheduleService = (function () {
    function ScheduleService(_http) {
        this._http = _http;
        this._scheduleUrl = 'http://localhost:62028/api/schedule';
    }
    //get all runs in the given date period
    ScheduleService.prototype.getRuns = function (startDate, endDate) {
        //pass parameters via GET
        console.log("start date: " + startDate);
        console.log("end date: " + endDate);
        var url = this._scheduleUrl
            + '?startDate=' + encodeURIComponent(startDate === null ? startDate.toDateString() : "")
            + '&endDate=' + encodeURIComponent(endDate === null ? endDate.toDateString() : "");
        console.log(url);
        return this._http.get(url)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //get the run details with the passed id
    // getRun(id: number, startDate:Date, endDate:Date): Observable<IRun> {
    //   return this.getRuns(startDate, endDate)
    //     .map((products: IRun) => products.find(p => p.runID === id));
    // }
    ScheduleService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    };
    ScheduleService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], ScheduleService);
    return ScheduleService;
}());
//# sourceMappingURL=E:/User/Documents/ScheduleGraph/src/src/app/schedule/schedule.service.js.map