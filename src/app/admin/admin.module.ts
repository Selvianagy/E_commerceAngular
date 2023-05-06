import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrandComponent } from './brand/brand.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { DeleteStoreComponent } from './delete-store/delete-store.component';
import { NewVendorNotificationsComponent } from './new-vendor-notifications/new-vendor-notifications.component';
import { ProfitComponent } from './profit/profit.component';
import { StoresComponent } from './stores/stores.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateStoreComponent } from './update-store/update-store.component';



@NgModule({
  declarations: [
    AdmindashboardComponent,
    AddCategoryComponent,
    BrandComponent,
    ConfirmationComponent,
    DeleteCategoryComponent,
    DeleteStoreComponent,
    NewVendorNotificationsComponent,
    ProfitComponent,
    StoresComponent,
    UpdateCategoryComponent,
    UpdateStoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ]
})
export class AdminModule { }
