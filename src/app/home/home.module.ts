import { NgModule } from '@angular/core';
import { MyHomeComponent } from './my-home/my-home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { NgIf,NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MobileSliderComponent } from './slider/mobile-slider/mobile-slider.component';
import { ComputerSliderComponent } from './slider/computer-slider/computer-slider.component';
import { TvSliderComponent } from './slider/tv-slider/tv-slider.component';
import { BookSliderComponent } from './slider/book-slider/book-slider.component';
import { ClotheSliderComponent } from './slider/clothe-slider/clothe-slider.component';




@NgModule({
  declarations: [
    MyHomeComponent,
    SliderComponent,
    MobileSliderComponent,
    ComputerSliderComponent,
    TvSliderComponent,
    BookSliderComponent,
    ClotheSliderComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgIf,
    NgFor,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports:[MyHomeComponent]
})



export class HomeModule {}