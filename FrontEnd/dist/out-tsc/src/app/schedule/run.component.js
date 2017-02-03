var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var colors;
(function (colors) {
    colors[colors["lightblue"] = 0] = "lightblue";
    colors[colors["lightgreen"] = 1] = "lightgreen";
    colors[colors["lightred"] = 2] = "lightred";
    colors[colors["lightgray"] = 3] = "lightgray";
    colors[colors["lightyellow"] = 4] = "lightyellow";
})(colors || (colors = {}));
export var RunComponent = (function () {
    function RunComponent() {
    }
    RunComponent.prototype.ngOnInit = function () {
        //the run percent is 100% divided by 24 hours in a day times the runtime
        this.runWidthPercent = ((100 / 24) * this.runData.runTime);
        this.runWidthPixels = window.screen.availWidth * (this.runWidthPercent / 100);
        var startTime = new Date(this.runData.startDate);
        this.runLeftPercent = ((100 / 24) * startTime.getHours());
        console.log("run data start date: " + this.runData.s);
        console.log("start time: " + startTime);
        console.log("hours: " + startTime.getHours());
        console.log(this.runLeftPercent);
        //console.log(this.runWidthPercent);
        //console.log(this.runWidthPixels);
        //console.log()
    };
    RunComponent.prototype.getRandomColor = function () {
        // let randomInt = Math.floor(Math.random() * 5);
        // console.log(randomInt);
        // return colors[randomInt];
        return colors[this.runData.runID % 4];
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], RunComponent.prototype, "runData", void 0);
    RunComponent = __decorate([
        Component({
            selector: 'app-run',
            styles: ['.run {display:inline-block; border:1px solid black; height:60px; position:absolute}'],
            template: "\n   <div class=\"run\" [style.width.%]=\"runWidthPercent\" [style.left.%]=\"runLeftPercent\" [style.background-color]=\"getRandomColor()\" >    \n     <span class=\"runDetails\">Run ID: {{runData.runID}}</span>\n     <span *ngIf=\"runWidthPixels > 350\" class=\"runDetails\">Order No: {{runData.orderNo}}</span>\n     <span *ngIf=\"runWidthPixels > 450\" class=\"runDetails\">Quantity: {{runData.quantity}} {{runData.quantityUom}}</span>\n     <span *ngIf=\"runWidthPixels > 550\" class=\"runDetails\">Promise Date: {{runData.promiseDate | date:'shortDate'}}</span>\n     <span *ngIf=\"runWidthPixels > 900\" class=\"runDetails\">Run Time: {{runData.runTime}} hrs</span>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RunComponent);
    return RunComponent;
}());
//# sourceMappingURL=E:/User/Documents/ScheduleGraph/FrontEnd/src/src/app/schedule/run.component.js.map