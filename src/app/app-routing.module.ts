import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { MyHomeComponent } from './home/my-home/my-home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';
import { ErrorNotFoundComponent } from './notfound/error-not-found/error-not-found.component';
import { FaqComponent } from './faq/faq/faq.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import {LoginComponent} from "./login/login/login.component";
import {MainComponent} from "./main/main/main.component";
import { RegisterComponent } from './register/register/register.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VendorRegisterComponent } from './register/vendor-register/vendor-register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { BrandComponent } from './admin/brand/brand.component';
import { ConfirmationComponent } from './admin/confirmation/confirmation.component';
import { DeleteCategoryComponent } from './admin/delete-category/delete-category.component';
import { DeleteStoreComponent } from './admin/delete-store/delete-store.component';
import { NewVendorNotificationsComponent } from './admin/new-vendor-notifications/new-vendor-notifications.component';
import { ProfitComponent } from './admin/profit/profit.component';
import { StoresComponent } from './admin/stores/stores.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { UpdateStoreComponent } from './admin/update-store/update-store.component';
import { VendordashboardComponent } from './vendor/vendordashboard/vendordashboard.component';
import { MobileComponent } from './vendor/mobile/mobile.component';
import { MobiledetailsComponent } from './vendor/mobiledetails/mobiledetails.component';
import { ComputerComponent } from './vendor/computer/computer.component';
import { ComputerdetailsComponent } from './vendor/computerdetails/computerdetails.component';
import { TVComponent } from './vendor/tv/tv.component';
import { TVdetailsComponent } from './vendor/tvdetails/tvdetails.component';
import { ClothingComponent } from './vendor/clothing/clothing.component';
import { ClothingDetailsComponent } from './vendor/clothing-details/clothing-details.component';
import { BookComponent } from './vendor/book/book.component';
import { BookDetailsComponent } from './vendor/book-details/book-details.component';
import { DiscountComponent } from './vendor/discount/discount.component';
import { DiscountDetailsComponent } from './vendor/discount-details/discount-details.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'vendorregister', component: VendorRegisterComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'paymentdone', component: CheckoutComponent},
  {path: 'admindashboard', component: AdmindashboardComponent,
    children: [
      { path: 'notification', component: NewVendorNotificationsComponent },
      { path: 'category', component: AddCategoryComponent },
      { path: 'updatecategory', component: UpdateCategoryComponent },
      { path: 'deletecategory', component: DeleteCategoryComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'updatestore/:id', component: UpdateStoreComponent },
      { path: 'deletestore/:id', component: DeleteStoreComponent },
      { path: 'profits', component: ProfitComponent },
      { path: 'confirmation/:id', component: ConfirmationComponent },
      {path:'brand',component:BrandComponent},

    ]
  },
  {path:'vendordashboard',component:VendordashboardComponent,
  children:[
    {path:'mobile',component:MobileComponent},
    {path:'mobiledetails',component:MobiledetailsComponent},
    {path:'computer',component:ComputerComponent},
    {path:'computerdetails',component:ComputerdetailsComponent},
    {path:'tv',component:TVComponent},
    {path:'tvdetails',component:TVdetailsComponent},
    {path:'clothing',component:ClothingComponent},
    {path:'clothingdetails',component:ClothingDetailsComponent},
    {path:'book',component:BookComponent},
    {path:'bookdetails',component:BookDetailsComponent},
    {path:'discount',component:DiscountComponent},
    {path:'discountdetails',component:DiscountDetailsComponent},
      ]
  },

  { path: '', component: MainComponent,
    children: [
      { path: '', component: MyHomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'shoppingcart', component: ShoppingCartComponent,canActivate:[AuthGuard]    },
      { path: 'checkout', component: CheckoutComponent ,canActivate:[AuthGuard]},
      { path: 'wishing-list', component: WishlistComponent ,canActivate:[AuthGuard]},
      {path:'product-details/',component:ProductDetailsComponent},
      {path:'contactUs',component:ContactUsComponent},
      {path:'aboutUs',component:AboutUsComponent},
      { path: 'productItem', redirectTo: 'product', pathMatch: 'full' },
      { path: 'faq', component: FaqComponent },
      { path: '**', component: ErrorNotFoundComponent },
    ]
  },

  { path: '**', component: ErrorNotFoundComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
