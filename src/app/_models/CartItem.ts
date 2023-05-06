import { DecimalPipe } from "@angular/common";
import { IMainProduct } from "./MainProduct";

export interface ICartItem{
     id :number  ,
     product_Quantity:number,
     mainProductId :number,
    shoppingCartId :number,
     mainProduct:IMainProduct,
      customerId:string

}