import { HttpClient ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IPayment } from '../_models/Payment';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public userid: any = null;
  httpOptions: any;
  baseurl = 'http://localhost:5244/api/Payment';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new Headers()
    }
  }

  MakeOrder(id:string){
    let params = new HttpParams().set('customerid', id);

    return this.httpClient.post(`${this.baseurl}/PaymentProcess`,null, {params: params});
  }

  CaculateProfit(payment:IPayment){

    return this.httpClient.post(`${this.baseurl}/ProfitCalculate`,payment );
  }
}
