import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient:HttpClient) { }
//Books
  getBooks():Observable<any>{
      return this.httpClient.get('https://localhost:5244/api/Book/GetBooks')
  }


//Cloths
  getClothes():Observable<any>{
    return this.httpClient.get('http://localhost:5244/api/Clothing/GetAllCloths')
  }
 
  //Computers
  getComputers():Observable<any>{
      return this.httpClient.get('http://localhost:5244/api/Computer/GetAllComputers')
  }

 
//TV
  getTVs():Observable<any>{
      return this.httpClient.get('http://localhost:5244/api/TV/GetTVs')
  }
  

  //mobile
  getMobiless():Observable<any>{
    return this.httpClient.get('http://localhost:5244/api/Mobile/GetMobiles')
  }

  //productDetials
  getMobilesDetails(name:any,id:any):Observable<any>{
    console.log(this.httpClient.get(`http://localhost:5244/api/${name}/${id}`));
    return this.httpClient.get(`http://localhost:5244/api/${name}/${id}`)
  }



//Reviews
   getReviews(productId:any):Observable<any>{
    
    return this.httpClient.get(`http://localhost:5244/api/Review/GetReviews?productId=${productId}`)
   }
}
