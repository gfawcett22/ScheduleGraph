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
        this.runWidth = ((100 / 24) * this.runData.runTime);
    };
    RunComponent.prototype.getRandomColor = function () {
        var randomInt = Math.floor(Math.random() * 5);
        return colors[randomInt];
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], RunComponent.prototype, "runData", void 0);
    RunComponent = __decorate([
        Component({
            selector: 'app-run',
            styles: ['.run {display:inline}'],
            template: "\n   <div class=\"run\" [style.width.%]=\"runWidth\" [style.background-color]=\"getRandomColor()\">\n   <span>Run ID: {{runData.runID}}</span>\n   <span>Order No: {{runData.orderNo}}</span>\n   <span>Quantity: {{runData.quantity}} {{runData.quantityUom}}</span>\n   <span>Promise Date: {{runData.promiseDate}}</span>\n   <span>Run Time: {{runData.runTime}}</span>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RunComponent);
    return RunComponent;
}());
//# sourceMappingURL=E:/User/Documents/ScheduleGraph/FrontEnd/src/src/app/schedule/run.component.js.map