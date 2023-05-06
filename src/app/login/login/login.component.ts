import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { IToken } from 'src/app/_models/Token';
import { ILogin } from 'src/app/_models/login';
import {AuthService} from 'src/app/_services/auth.service'
import { JwtModule,JwtHelperService } from '@auth0/angular-jwt';
import { ICartItem } from 'src/app/_models/CartItem';
import { ShoppingcartService } from 'src/app/_services/cart.service';
import { IWishlist } from 'src/app/_models/WishList';
import { WishlistService } from 'src/app/_services/wishlist.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm:FormGroup;
  loginuser:ILogin={} as ILogin
  errorMessage:string=""
  Token:any={}
  public jwtHelper: JwtHelperService = new JwtHelperService();
  Userid:string=""

  WishItemlist:IWishlist[]=[]
  cartitemslist:ICartItem[]=[]

  constructor(private fb:FormBuilder,private login:AuthService,private router:Router
    ,private cartitems:ShoppingcartService,private wishlist:WishlistService){
    this.LoginForm=fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  }

  ngOnInit(){
    
  }
  get UserName(){
    return this.LoginForm.get('userName');
  }
  get Password(){
    return this.LoginForm.get('password');
  }
  loginData(){
    this.loginuser.userName=this.UserName?.value;
    this.loginuser.password=this.Password?.value;
    this.login.login(this.loginuser).subscribe({
      next:data=>{
        console.log("dfghjk")
        this.Token=data
        localStorage.setItem('token',this.Token.token)
        const decodedToken = this.jwtHelper.decodeToken(this.Token.token);
        this.Userid=decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
        localStorage.setItem('userid',this.Userid)
        localStorage.setItem('username',this.UserName?.value)

        this.cartitems.GetCartItems(localStorage.getItem('userid')).subscribe({
          next:data=>{
            this.cartitemslist=data
            console.log(this.cartitemslist)
           localStorage.setItem('cartitems',JSON.stringify(this.cartitemslist))
           localStorage.setItem('cartitemslength',this.cartitemslist.length.toString())
           this.cartitems.putNumberOfCartItem(this.cartitemslist.length)
          },     
           error:err=>this.errorMessage=err
        })

        this.wishlist.GetWishItems(localStorage.getItem('userid')).subscribe({
          next:data=>{
            this.WishItemlist=data
            localStorage.setItem('wishitems',JSON.stringify(this.WishItemlist))
           localStorage.setItem('wishitemslength',this.WishItemlist.length.toString())
           this.wishlist.putNumberOfWishItem(this.WishItemlist.length)
         
          },
          error:err=>this.errorMessage=err
         })
         
        this.router.navigate([""]);
      },
      error:err=>this.errorMessage=err
    })
    
  }
  

}
