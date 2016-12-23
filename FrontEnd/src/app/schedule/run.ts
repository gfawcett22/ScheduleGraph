/**
 * Created by User on 12/18/16.
 */
export interface IRun{
  runID:number;
  status:string;
  orderNo:number;
  partNo:string;
  quantity:number;
  quantityUom:string;
  runTime:number;
  startDate: Date;
  endDate: Date;
  promiseDate: Date;
  compounds:string[];
  tapes:string[];
}
