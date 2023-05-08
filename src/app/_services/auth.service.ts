import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { ILogin } from '../_models/login';
import { IToken } from '../_models/Token';
import { BehaviorSubject, Observable} from 'rxjs';
import { IRegister } from '../_models/register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  isLoggedSubject:BehaviorSubject<boolean>
  public user: any = null;
  httpOptions: any;
  baseurl = 'http://localhost:5244/api/Account';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new Headers()
    }
  this.isLoggedSubject=new BehaviorSubject<boolean> (false);
  }

  login(body: ILogin){
    this.isLoggedSubject.next(true);
    return this.httpClient.post<IToken>(`${this.baseurl}/login`, body, this.httpOptions);
  }

  setupUserProfile() {

    let userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.logout();
    }

    if (this.user)
      this.user.token = localStorage.getItem('token');
  }

  getUser() {
    let user: any = null;
    let userData = localStorage.getItem('user');
    if (userData) {
      user = JSON.parse(userData);
    }
    if (user != null) {
      console.log(localStorage.getItem('token'))
      user.token = localStorage.getItem('token');
    }
    return user;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userid');
    localStorage.removeItem('cartitems');
    localStorage.removeItem('cartitemslength');
    localStorage.removeItem('wishitems');
    localStorage.removeItem('wishitemslength');
    this.isLoggedSubject.next(false);
    this.router.navigate(['/login']);
  }


  register(newuser:any){
    const formData = new FormData();
  for (const user in newuser) {
    if (!newuser.hasOwnProperty(user)) { continue; }
    formData.append(user , newuser[user]);
  }
  console.log(newuser.Image)
  return this.httpClient.post(`${this.baseurl}/register`, formData);
  // return this.httpClient.get("http://localhost:5244/api/Customer/GetCustomer?customerId=d71cd1ad-9a9e-42a0-9da3-0157623cd8c3")

  }

  registerVendor(vendor:any){
    return this.httpClient.post(`${this.baseurl}/vendorRegister`, vendor);

  }
  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('token'))? true: false
  }

  getLoggedSubject(){
    if(this.isUserLogged.valueOf()){
       this.isLoggedSubject.next(true)
       return this.isLoggedSubject;
    }

      this.isLoggedSubject.next(false)
       return this.isLoggedSubject;
  }

}
