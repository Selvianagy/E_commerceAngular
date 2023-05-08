import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobiledetailsComponent } from './mobiledetails/mobiledetails.component';
import { ComputerComponent } from './computer/computer.component';
import { ComputerdetailsComponent } from './computerdetails/computerdetails.component';
import { TVComponent } from './tv/tv.component';
import { TVdetailsComponent } from './tvdetails/tvdetails.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ClothingDetailsComponent } from './clothing-details/clothing-details.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DiscountComponent } from './discount/discount.component';
import { DiscountDetailsComponent } from './discount-details/discount-details.component';



@NgModule({
  declarations: [
    VendordashboardComponent,
    MobileComponent,
    MobiledetailsComponent,
    ComputerComponent,
    ComputerdetailsComponent,
    TVComponent,
    TVdetailsComponent,
    ClothingComponent,
    ClothingDetailsComponent,
    BookComponent,
    BookDetailsComponent,
    DiscountComponent,
    DiscountDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    


  ]
})
export class VendorModule { }
