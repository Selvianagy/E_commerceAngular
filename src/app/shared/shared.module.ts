import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Design/header/header.component';
import { FooterComponent } from './Design/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports:[HeaderComponent,FooterComponent]

})
export class SharedModule { }
