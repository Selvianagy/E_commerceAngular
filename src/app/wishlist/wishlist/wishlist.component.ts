import { Component } from '@angular/core';
import { ICartItem } from 'src/app/_models/CartItem';
import { IWishlist } from 'src/app/_models/WishList';
import { ShoppingcartService } from 'src/app/_services/cart.service';
import { WishlistService } from 'src/app/_services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  WishItemlist:IWishlist[]=[]
  numberofcart:number=0
  UserId:string|null=localStorage.getItem('userid')
  errorMessage:string=""
  input_quantity:number=0
  cartItem:ICartItem={} as ICartItem
 constructor(private wishlist:WishlistService,private cartitem:ShoppingcartService){
   
 }

 ngOnInit() {
   this.wishlist.GetWishItems(this.UserId).subscribe({
     next:data=>{
       this.WishItemlist=data
       console.log(this.WishItemlist)
       this.numberofcart=this.WishItemlist.length
    
     },
     error:err=>this.errorMessage=err
    })
  
 }

 DeleteWishItem(id:number){
  console.log(id)
  this.wishlist.DeleteWishItems(id).subscribe({
    next:data=>{
         this.WishItemlist.forEach( (value) => {
          if(value.id==id){
            const index = this.WishItemlist.indexOf(value);
            if (index !== -1) {
              this.WishItemlist.splice(index, 1);
            }
          }
          this.numberofcart=this.WishItemlist.length
    });
    },
    error:err=>this.errorMessage=err
   })
 }

 AddCartItem(id:number){
  this.WishItemlist.forEach( (value) => {
    if(value.id==id){
      this.cartItem.product_Quantity=value.product_Quantity
      this.cartItem.mainProductId=value.mainProductId
      this.cartItem.customerId=value.customerId
    }
});
this.cartitem.AddCartItem(this.cartItem).subscribe({
  next:data=>{
    this.WishItemlist.forEach( (value) => {
      if(value.id==id){
        const index = this.WishItemlist.indexOf(value);
        if (index !== -1) {
          this.WishItemlist.splice(index, 1);
        }
      }
      this.numberofcart=this.WishItemlist.length
});

this.wishlist.DeleteWishItems(id).subscribe({
  next:data=>console.log(data),
  error:err=>this.errorMessage=err
})
  },
  error:err=>this.errorMessage=err
 })
 }
}
