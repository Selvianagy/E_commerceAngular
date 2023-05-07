import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BookComponent } from './book/book.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ComputerComponent } from './computer/computer.component';
import { MobileComponent } from './mobile/mobile.component';
import { ReviewComponent } from './review/review.component';
import { TvComponent } from './tv/tv.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    BookComponent,
    ClothingComponent,
    ComputerComponent,
    MobileComponent,
    ReviewComponent,
    TvComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductsModule { }
