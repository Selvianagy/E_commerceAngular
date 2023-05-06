
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  getUser() {
    return this.http.get<any>(`${this.baseurl}/getMe`, this.httpOptions);
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



