import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ICartItem } from 'src/app/_models/CartItem';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPayment } from 'src/app/_models/Payment';
import { PaymentService } from 'src/app/_services/payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  PaymentForm:FormGroup;

  state:any
  Cartitemlist:ICartItem[]=[]
  cartItemsListLength=0
  Totalprice:number=0
  UserName=localStorage.getItem('username')
  UserId:any=localStorage.getItem('userid')
  errorMessage:string=""
  payment:IPayment={} as IPayment

  constructor(private route:Router,private fb:FormBuilder,private paymentprocess:PaymentService){

    this.PaymentForm=fb.group({
      userName:['',[Validators.required]],
      creditCard_Num:['',[Validators.required,Validators.pattern("[0-9 ]+")]],
      expirydate:['',[Validators.required]],
      CVV:['',[Validators.required]],
    });

    this.state=this.route.getCurrentNavigation()?.extras.state;
    this.Cartitemlist=this.state['List']
    this.Totalprice=this.state['total']
    this.cartItemsListLength=this.Cartitemlist.length;
  }

  get NameCustomer(){
    return this.PaymentForm.get('userName');
  }
  get CreditCardNum(){
    return this.PaymentForm.get('creditCard_Num');
  }
  get Expirydate(){
    return this.PaymentForm.get('expirydate');
  }
  get CVV(){
    return this.PaymentForm.get('CVV');
  }

  PaymentData(){
    this.payment.creditCard_Num=this.CreditCardNum?.value
    this.payment.customerId=this.UserId
    this.paymentprocess.MakeOrder(this.UserId).subscribe({
      next:data=>{
        console.log("order")
        this.paymentprocess.CaculateProfit(this.payment).subscribe({
          next:data=>{
            this.route.navigate(["paymentdone"]);
          },
          error:err=>this.errorMessage=err
        })
      },
      error:err=>this.errorMessage=err
    })
    }
  
}
