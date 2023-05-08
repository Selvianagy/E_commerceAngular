import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICartItem } from 'src/app/_models/CartItem';
import { ShoppingcartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

   CartItemlist:ICartItem[]=[]
   numberofcart:number=0
   UserId:string|null=localStorage.getItem('userid')
   errorMessage:string=""
   totalprice:number=0
  constructor(private shoppcart:ShoppingcartService,private router:Router){
    
  }

  ngOnInit() {
    this.shoppcart.GetCartItems(this.UserId).subscribe({
      next:data=>{
        this.CartItemlist=data
        console.log(this.CartItemlist)
        this.numberofcart=this.CartItemlist.length
        this.CartItemlist.forEach( (value) => {
          this.totalprice+=value.mainProduct.priceAfterDiscount*value.product_Quantity
      });
      },
      error:err=>this.errorMessage=err
     })
   
  }
  CalculateTotalPrice(){

  }
  DeleteCartItem(cartid:number){
    this.shoppcart.DeleteCartItem(cartid).subscribe({
      next:data=>{
           this.CartItemlist.forEach( (value) => {
            if(value.id==cartid){
              const index = this.CartItemlist.indexOf(value);
              if (index !== -1) {
                this.CartItemlist.splice(index, 1);
              }
              this.totalprice-=value.mainProduct.priceAfterDiscount*value.product_Quantity
            }
      })
      this.numberofcart=this.CartItemlist.length
      },
      error:err=>this.errorMessage=err
     })
  }

  navegate(){
    this.router.navigate(["payment"],{ state: { List: this.CartItemlist ,total:this.totalprice}});
  }

  updatecartitem(id:any,quantity:any){
    this.CartItemlist.forEach( (value) => {
      if(value.id==id){
        value.product_Quantity=quantity
        this.shoppcart.UpdateCartItem(value).subscribe(data=>{
          console.log(data)
        })
      }
      this.totalprice+=value.mainProduct.priceAfterDiscount*value.product_Quantity
 });
  }
}
