import { Component } from '@angular/core';
import { ICartItem } from 'src/app/_models/CartItem';
import { AuthService } from 'src/app/_services/auth.service';
import { ShoppingcartService } from 'src/app/_services/cart.service';
import { UserService } from 'src/app/_services/user.service';
import { WishlistService } from 'src/app/_services/wishlist.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLogged:boolean=false
  isAdmin:boolean=false
  isVendor:boolean=false
  carditemslength:number=0
  wishitemslength:number=0
  user:any='';
  constructor( private authuser:AuthService,private cartitems:ShoppingcartService,private wishlist:WishlistService
    ,private userlogin:UserService){ 
    
  }
  
  ngOnInit(){
    this.authuser.getLoggedSubject().subscribe(data=>{
      this.isLogged=data;
    })
    
    this.cartitems.Numberofcarts().subscribe(data=>{
      this.carditemslength=data
      console.log("cart "+data)
    })

    this.wishlist.Numberofwishitems().subscribe(data=>{
      this.wishitemslength=data
      console.log("wish "+data)
    })
    this.authuser.getRoolSubject().subscribe(data=>{
      console.log(localStorage.getItem('role'))
      if(data=='Admin'){
        this.isAdmin=true
      }else if(data=='Vendor'){
        this.isVendor==true
      }else{
        this.isAdmin=false
        this.isVendor=false
      }
     })

  }

  logOutUser()
  {
    this.carditemslength=0
    this.wishitemslength=0
    this.authuser.logout()
  }
getuser(){
  
}
  logOut(){

  }
}
