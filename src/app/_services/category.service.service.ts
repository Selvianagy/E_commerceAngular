import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { Observable, catchError, throwError } from 'rxjs';
import { ICategory } from '../_models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  public user: any = null;
  httpOptions: any;
  baseurl = 'http://localhost:5244/api/Category';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new Headers()
    }
  }

  GetCategories():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${this.baseurl}/GetCategories`).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
}