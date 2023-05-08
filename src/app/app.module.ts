import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { HttpClientModule} from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { PaymentModule } from './payment/payment.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AdminModule } from './admin/admin.module';
import { VendorModule } from './vendor/vendor.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    RegisterModule,
    LoginModule,
    ShoppingCartModule,
    WishlistModule,
    PaymentModule,
    CheckoutModule,
    AdminModule,
    VendorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
