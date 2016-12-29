/**
 * Created by User on 12/18/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IRun } from './run';
import {IDateModel} from "ng2-datepicker/src/components/ng2-datepicker.component";

@Injectable()
export class ScheduleService {
  private _scheduleUrl = 'http://localhost:62028/api/schedule';

  constructor(private _http: Http) { }

  //get all runs in the given date period
  getRuns(startDate:IDateModel, endDate:IDateModel): Observable<IRun[]> {
    //pass parameters via GET
    var url = this._scheduleUrl
      + '?startDate=' + startDate.formatted
      + '&endDate=' + endDate.formatted;
    console.log(url);
    return this._http.get(url)
      .map((response: Response) => <IRun[]> response.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  //get the run details with the passed id
  // getRun(id: number, startDate:Date, endDate:Date): Observable<IRun> {
  //   return this.getRuns(startDate, endDate)
  //     .map((products: IRun) => products.find(p => p.runID === id));
  // }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
