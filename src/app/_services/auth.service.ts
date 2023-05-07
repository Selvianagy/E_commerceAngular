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
  isRoleSubject:BehaviorSubject<string>

  public user: any = null;
  httpOptions: any;
  baseurl = 'http://localhost:5244/api/Account';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new Headers()
    }
    this.isLoggedSubject=new BehaviorSubject<boolean> (false);
    this.isRoleSubject=new BehaviorSubject<string> ("customer");
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
    localStorage.removeItem('role');
    localStorage.removeItem('userimage')

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

  }

  registerVendor(vendor:any){
    const formData = new FormData();
  for (const user in vendor) {
    if (!vendor.hasOwnProperty(user)) { continue; }
    formData.append(user , vendor[user]);
  }
    return this.httpClient.post(`${this.baseurl}/vendorRegister`, vendor);

  }
  get isUserRole(): string
  {
      if(localStorage.getItem('role')=='Admin'){
        return 'Admin';
      }else if(localStorage.getItem('role')=='Vendor'){
        return 'Vendor'
      }else{
        return 'customer'
      }
  }

  getRoolSubject(){
    if(this.isUserRole.valueOf()=='Admin'){
       this.isRoleSubject.next('Admin')
       return this.isRoleSubject;
    }else if(this.isUserRole.valueOf()=='Vendor'){
      this.isRoleSubject.next('Vendor')
      return this.isRoleSubject;
   }else
    {
      this.isRoleSubject.next('customer')
      return this.isRoleSubject;
   }
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
