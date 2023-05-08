import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Mobile } from '../_models/Mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  ControllerName:string='';
  GetURL:string="http://localhost:5244/api/`${this.ControllerName}`/GetProducts"
  PutURL:string="http://localhost:5244/api/`${this.ControllerName}`/PutProduct"
  DeleteURL:string="http://localhost:5244/api/`${this.ControllerName}`/DeleteProduct"
  AddURL:string="http://localhost:5244/api/`${this.ControllerName}`/AddProduct"
  mobiles:Observable<Mobile[]>|undefined;
  mobile:any;


  constructor(private http:HttpClient) { }


  GetAllMobiles(ControllerName:string):Observable<Mobile[]>
  {
    this.ControllerName=ControllerName;
    this.mobiles=this.http.get<Mobile[]>(this.GetURL).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
    return this.mobiles;
  }

  GetMobile(id:any,ControllerName:string):Observable<Mobile>|undefined
  {
    const mobiles=this.GetAllMobiles(ControllerName);
    const mobile=mobiles.pipe(
      map((m)=>m.find((n)=>n.Id===id))
    );
    this.mobile=mobile;

    return this.mobile;
  }

  AddMobile(mobile:Mobile,ControllerName:string)
  {
    this.ControllerName=ControllerName;
    this.http.post(this.AddURL,mobile).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }

  UpdateMobile(mobile:Mobile)
  {
    this.http.put(this.PutURL,mobile).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
  DeleteMobile(id:any)
  {
    this.http.delete(this.DeleteURL,id).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
  

}
