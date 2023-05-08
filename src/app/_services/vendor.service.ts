import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { VendorInfo } from '../_models/VendorInfo';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
InfoURL:string='http://localhost:5244/vendor/GetInfo'
  constructor(private http:HttpClient) { }
  GetInfo():Observable<VendorInfo>
  {

    return this.http.get<VendorInfo>(this.InfoURL).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
}
