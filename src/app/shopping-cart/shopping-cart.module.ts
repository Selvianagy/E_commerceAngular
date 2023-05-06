import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule, 
     FormsModule,
     BrowserModule,
     ReactiveFormsModule

  ]
})
export class ShoppingCartModule { }
