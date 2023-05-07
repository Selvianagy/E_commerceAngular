import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, catchError, throwError } from 'rxjs';
import { ICartItem } from '../_models/CartItem';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IWishlist } from '../_models/WishList';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlist:BehaviorSubject<number>
  i:number
  public userid: any = null;
  httpOptions: any;
  baseurl = 'http://localhost:5244/api/Wishlist';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new Headers()
    }
    this.i=Number(localStorage.getItem("wishitemslength"))
    this.wishlist=new BehaviorSubject<number>(this.i)
  }

  GetWishItems(userid:any){
    let params = new HttpParams().set('CustomerID', userid);

    return this.httpClient.get<IWishlist[]>(`${this.baseurl}/GetWishlist`,{params: params}).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
  DeleteWishItems(id:number){
      this.i=this.i-1
      localStorage['wishitemslength']=this.i
      console.log("withlistlenth "+localStorage.getItem('wishitemslength'))
      this.wishlist.next(this.i)
    
    let params = new HttpParams().set('wishId', id);

    return this.httpClient.delete(`${this.baseurl}/DeleteWishCart`,{params: params}).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }

 
  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('token'))? true: false
  }

  Numberofwishitems(){
    if(this.isUserLogged.valueOf()){
      this.wishlist.next(this.i)
      return this.wishlist;
   }else{
    this.wishlist.next(0)
    return this.wishlist;
   }
     
  }

  putNumberOfWishItem(num:any){
    console.log(num)
   this.wishlist.next(num)
  }
}
