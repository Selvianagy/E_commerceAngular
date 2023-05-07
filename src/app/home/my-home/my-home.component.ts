import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDetailsComponent } from 'src/app/products/product-details/product-details.component';
import { ProductServiceService } from 'src/app/_services/product-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss'],
  providers:[ProductDetailsComponent]
})
export class MyHomeComponent {
  url: string = "../assets/IPhone.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }


mobilesProducts:any[]=[];

ClothsProducts:any[]=[];

TvProducts:any[]=[];

ComputerProducts:any[]=[];

BooksProducts:any[]=[];
constructor(private productService:ProductServiceService,private sanitizer:DomSanitizer) {}


  ngOnInit():void{
    this.productService.getMobiless().subscribe({
      next:(mobilesProducts)=>{
          this.mobilesProducts=mobilesProducts;

        for (let i = 0; i < this.mobilesProducts.length; i++) {
          console.log(this.mobilesProducts[i].mobileImges.length)
          for (let j = 0; j < this.mobilesProducts[i].mobileImges.length; j++) {
              this.mobilesProducts[i].mobileImges[j]='data:image/png;base64,' + this.mobilesProducts[i].mobileImges[j];
          }
        }
       }
    })
      this.productService.getClothes().subscribe({
      next:(ClothsProducts)=>{
      this.ClothsProducts=ClothsProducts;
      for (let i = 0; i < this.ClothsProducts.length; i++) {
        console.log(this.ClothsProducts[i].mobileImges.length)
        for (let j = 0; j < this.ClothsProducts[i].mobileImges.length; j++) {
            this.ClothsProducts[i].mobileImges[j]='data:image/png;base64,' + this.ClothsProducts[i].mobileImges[j];
            console.log(this.ClothsProducts[i].mobileImges[j])
        }
      }     
     }
    })

    this.productService.getComputers().subscribe({
      next:(computers)=>{
        this.ComputerProducts=computers;
        for (let i = 0; i < this.ComputerProducts.length; i++) {
          console.log(this.ComputerProducts[i].mobileImges.length)
          for (let j = 0; j < this.ComputerProducts[i].mobileImges.length; j++) {
              this.ComputerProducts[i].mobileImges[j]='data:image/png;base64,' + this.ComputerProducts[i].mobileImges[j];
              console.log(this.ComputerProducts[i].mobileImges[j])
          }
        } 
      }
    })

    this.productService.getBooks().subscribe({
      next:(BooksProducts)=>{
        this.BooksProducts=BooksProducts;
        for (let i = 0; i < this.BooksProducts.length; i++) {
          console.log(this.BooksProducts[i].mobileImges.length)
          for (let j = 0; j < this.BooksProducts[i].mobileImges.length; j++) {
              this.BooksProducts[i].mobileImges[j]='data:image/png;base64,' + this.BooksProducts[i].mobileImges[j];
              console.log(this.BooksProducts[i].mobileImges[j])
          }
        } 
      }
    })

    this.productService.getTVs().subscribe({
      next:(TVs)=>{
        this.TvProducts=TVs;
        for (let i = 0; i < this.TvProducts.length; i++) {
          console.log(this.TvProducts[i].mobileImges.length)
          for (let j = 0; j < this.TvProducts[i].mobileImges.length; j++) {
              this.TvProducts[i].mobileImges[j]='data:image/png;base64,' + this.TvProducts[i].mobileImges[j];
              console.log(this.TvProducts[i].mobileImges[j])
          }
        } 
      }
    })
    


  }



  
  
}
