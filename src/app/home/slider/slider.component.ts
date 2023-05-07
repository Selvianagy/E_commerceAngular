import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  imgSrcsArr: string[] = [
   'assets/img/1.jpg',
   'assets/img/1.jpg',
   'assets/img/1.jpg',
   'assets/img/1.jpg',
   'assets/img/1.jpg',
   'assets/img/1.jpg',
   'assets/img/1.jpg',
   'assets/img/1.jpg',
   'assets/img/1.jpg',
   'assets/img/1.jpg'
 
  ];
@Input() getAllMobiles:any[]=[]
@Input() getAllComputers:any[]=[]
@Input() getAllTVs:any[]=[]
@Input() getAllBooks:any[]=[]
@Input() getAllClothes:any[]=[]
}
