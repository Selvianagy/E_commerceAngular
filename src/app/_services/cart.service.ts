import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { ICartItem } from '../_models/CartItem';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  cartitems:BehaviorSubject<number>
  i:number
  cartitemslist:ICartItem[]=[]


  public userid: any = null;
  httpOptions: any;
  baseurl = 'http://localhost:5244/api/CardItem';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new Headers()
    }
    this.i=Number(localStorage.getItem("cartitemslength"))
    this.cartitems=new BehaviorSubject<number>(this.i)
  }

  GetCartItems(userid:any){
    let params = new HttpParams().set('CustomerID', userid);

    return this.httpClient.get<ICartItem[]>(`${this.baseurl}/Getlistofcard`,{params: params}).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }

  DeleteCartItem(id:number){
    this.i=this.i-1
    console.log(this.i)
    localStorage['cartitemslength']=this.i
    this.cartitems.next(this.i)
    
    let params = new HttpParams().set('cartId', id);

    return this.httpClient.delete(`${this.baseurl}/DeleteCartItem`,{params: params}).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }

  AddCartItem(cartItem:ICartItem){
      this.i=this.i+1
      console.log(this.i)
      localStorage['cartitemslength']=this.i
      this.cartitems.next(this.i)
      
    return this.httpClient.post(`${this.baseurl}/AddCardItem`, cartItem);
    
  }

  UpdateCartItem(cartItem:ICartItem){
    
    return this.httpClient.put(`${this.baseurl}/UpdateCartItem`, cartItem);
    
  }
  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('token'))? true: false
  }

  Numberofcarts(){
    if(this.isUserLogged.valueOf()){
      this.cartitems.next(this.i)
      return this.cartitems;
   }else{
    this.cartitems.next(0)
    return this.cartitems;
   }
     
  }

  putNumberOfCartItem(num:any){
    console.log(num)
   this.cartitems.next(num)
  }
}