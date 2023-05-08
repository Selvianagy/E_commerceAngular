import { DecimalPipe } from "@angular/common";
import { IMainProduct } from "./MainProduct";

export interface IWishlist{
    id :number  ,
    product_Quantity:number,
    mainProductId :number,
    customerId :string|null,
    mainProduct:IMainProduct,
}