import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-computer-slider',
  templateUrl: './computer-slider.component.html',
  styleUrls: ['./computer-slider.component.scss']
})
export class ComputerSliderComponent {
  url: string = "../assets/1.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }
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
  @Input() getAllComputers:any[]=[]
}
