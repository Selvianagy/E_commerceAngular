
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl='https://ecommerce-api-6p26.onrender.com/api/v1/users' ;


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }


  constructor(public http: HttpClient) {

  }


  getUser(userid:any) {
      let params = new HttpParams().set('customerId', userid);
  
      return this.http.get("http://localhost:5244/api/Customer/GetCustomer",{params: params}).pipe(catchError((err)=>{
        return throwError(()=>err.message ||"server error");
      }));
    }  

  updateUser(item: any) {

    return this.http.put(`${this.baseurl}/updateMe`, item, this.httpOptions)

  }
  changePassword(item:object){
    let user =JSON.stringify(item);
    return this.http.put(`${this.baseurl}/changeMyPassword`, user,this.httpOptions)

  }
  deleleUser(){
    return this.http.delete(`${this.baseurl}/deleteMe`, this.httpOptions)

  }


}



