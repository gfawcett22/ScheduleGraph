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
  styles: ['.run {display:inline}'],
  template: `
   <div class="run" [style.width.%]="runWidth" [style.background-color]="getRandomColor()">
   <span>Run ID: {{runData.runID}}</span>
   <span>Order No: {{runData.orderNo}}</span>
   <span>Quantity: {{runData.quantity}} {{runData.quantityUom}}</span>
   <span>Promise Date: {{runData.promiseDate}}</span>
   <span>Run Time: {{runData.runTime}}</span>
  </div>
  `
})
export class RunComponent implements OnInit{
  @Input() runData: IRun;
  runWidth: number;

  ngOnInit():void{
    this.runWidth = ((100/24) * this.runData.runTime);
  }
  getRandomColor():string{
    let randomInt = Math.floor(Math.random() * 5);
    return colors[randomInt];
  }
}
