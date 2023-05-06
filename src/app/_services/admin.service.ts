import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IBrand } from '../_models/Brand';
import { Observable, catchError, map,throwError } from 'rxjs';
import { ICategory } from '../_models/Category';
import { INotification } from '../_models/Notification';
import { IStore } from '../_models/store';
import { ITotalInfo } from '../_models/TotalInfo';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  Categories:Observable<ICategory[]>|undefined;
  Category:Observable<any> | undefined;
  Notifications: Observable<INotification[]> | undefined;
  Notification: any;
  Confirm: any;

  Stores:Observable<IStore[]>|undefined;
  Store:any;

  TOTALINFO:Observable<ITotalInfo>|undefined;
URL:string="";

  httpOptions: any;
  baseurl = 'http://localhost:5244/api/Admin';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new Headers()
    }
  }

  CreateBrand(brand:IBrand):Observable<any>
  {
    return this.httpClient.post<IBrand>(`${this.baseurl}/AddBrand`, brand).pipe(
      catchError((error) => {
        console.log('Error creating user:', error);
        return throwError(error);
      })
    );
  }
///////////////////////////////////
  GetCategories():Observable<ICategory[]>{
    this.Categories=this.httpClient.get<ICategory[]>(`${this.baseurl}/GetAllCategories`).pipe(catchError((err)=>
    {
      return throwError(()=>err.message ||"server error");
    }));
    return  this.Categories;
  }

  GetCategory(Id:any):Observable<any>| undefined{
    // this.Category=this.http.get<ICategory>(this.getURL1).pipe(catchError((err)=>
    // {
    //   return throwError(()=>err.message ||"server error");
    // }));
    this.Category=this.Categories?.pipe(
      map((category) => category.find((n) => n.id === Id))
    );
    return this.Category;
  }

  AddCategory(Category:any):Observable<any>
  {
    return this.httpClient.post(`${this.baseurl}/AddCategory`, Category)
      .pipe(
        catchError((error) => {
          console.log('Error creating user:', error);
          return throwError(error);
        })
      );
  }


  PUTCategory(data:any):Observable<ICategory>{
    return this.httpClient.put<ICategory>(`${this.baseurl}/PutCategory`, data).pipe(
      catchError((error) => {
        console.log('Error updating user:', error);
        return throwError(error);
      })
    );
  }


  DeleteCategory()
  {
    this.httpClient.delete<ICategory>(`${this.baseurl}/DeleteCategory`);
  }

////////////////////////////

  GetNotifications(): Observable<INotification[]> {
    this.Notifications = this.httpClient.get<INotification[]>(`${this.baseurl}/VendorDetails`).pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
    }));

    this.Notifications.forEach(element => {
      console.log(element);
    });
    return this.Notifications;
  }

  GetNotification(id: any): Observable<INotification|undefined> {
    // return this.http.get<INotification>(`${this.URL}/${id}`).pipe(catchError((err) => {
    //   return throwError(() => err.message || "server error");
    // }));

    const notifications$ = this.GetNotifications();
    const notification$ = notifications$.pipe(
    map((notifications) => notifications.find((n) => n.Id === id))
    );

    return notification$;
  }

  Confirmation(id: any) {
    this.Confirm = this.httpClient.get<any>(`${this.baseurl}/ConfirmVendor/${id}`).pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
    }));
  }
/////////////////////////////////////////////////
GetStores():Observable<IStore[]>
  {
    this.Stores=this.httpClient.get<IStore[]>(`${this.baseurl}/Stores`).pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
    }));

    return this.Stores;
  }

  GetStore(id:any):Observable<IStore|undefined>
  {
    const stores$ = this.GetStores();
    const store$ = stores$.pipe(
    map((stores) => stores.find((n) => n.Id === id))
    );

   this.Store=store$;

    return store$;
  }

  ////////////////////////////////////////////////

  GetTotals():Observable<ITotalInfo>{
    this.TOTALINFO=this.httpClient.get<ITotalInfo>(this.URL).pipe(catchError((err)=>
    {
      return throwError(()=>err.message ||"server error");
    }));
    return  this.TOTALINFO;
  }
}


