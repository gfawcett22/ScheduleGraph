import {Component, Input, OnInit} from '@angular/core';
import {IRun} from "./run";
enum colors{
  lightblue,
  lightgreen,
  lightred,
  lightgray,
  lightyellow
}
@Component({
  selector: 'app-run',
  styles: ['.run {display:inline-block; border:1px solid black; height:60px; position:absolute}'],
  template: `
   <div class="run" [style.width.%]="runWidthPercent" [style.left.%]="runLeftPercent" [style.background-color]="getRandomColor()" >    
     <span class="runDetails">Run ID: {{runData.runID}}</span>
     <span *ngIf="runWidthPixels > 350" class="runDetails">Order No: {{runData.orderNo}}</span>
     <span *ngIf="runWidthPixels > 450" class="runDetails">Quantity: {{runData.quantity}} {{runData.quantityUom}}</span>
     <span *ngIf="runWidthPixels > 550" class="runDetails">Promise Date: {{runData.promiseDate | date:'shortDate'}}</span>
     <span *ngIf="runWidthPixels > 900" class="runDetails">Run Time: {{runData.runTime}} hrs</span>
  </div>
  `
})
export class RunComponent implements OnInit {
  @Input() runData: IRun;
  runWidthPercent: number;
  runWidthPixels: number;
  runLeftPercent: number;

  ngOnInit(): void {
    //the run percent is 100% divided by 24 hours in a day times the runtime
    this.runWidthPercent = ((100 / 24) * this.runData.runTime);
    this.runWidthPixels = window.screen.availWidth * (this.runWidthPercent / 100);
    let startTime = new Date(this.runData.startDate);
    this.runLeftPercent = ((100 / 24) * startTime.getHours());
    console.log("run data start date: " + this.runData.startDate);
    console.log("start time: " + startTime);
    console.log("hours: " + startTime.getHours());
    console.log(this.runLeftPercent);
    //console.log(this.runWidthPercent);
    //console.log(this.runWidthPixels);
    //console.log()
  }

  getRandomColor(): string {
    // let randomInt = Math.floor(Math.random() * 5);
    // console.log(randomInt);
    // return colors[randomInt];
    return colors[this.runData.runID % 4];
  }
}
