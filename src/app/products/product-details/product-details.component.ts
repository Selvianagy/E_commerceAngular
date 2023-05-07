import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/_services/product-service.service';
import { SignalrServicesService } from 'src/app/_services/signalr-services.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  Userid:any=localStorage.getItem('userid')

  constructor(private activeRoute: ActivatedRoute,
    private reviewService: SignalrServicesService,
    private productService: ProductServiceService) {

  }
  CategoryDetails: any = {

  };
  reviews: any[] = [];
  newReview: any;
  getMobileDetail(id: any) {
    this.activeRoute.paramMap.subscribe({
      next: (params) => {
        const Id = params.get('i')
      }
    })
  }
  url: string = "../assets/IPhone.jpg";
  imageChange(event: any) {
    this.url = event.target.src;
  }
  rating: any = 5;
  onClick(rating: number) {
    this.rating = rating;
  }
  Category: any = '';
  MobileCategory: any = "Mobile";
  BookCategory: any = 'Book';
  ComputerCategory: any = "Computer";
  TVCategory: any = "TV";
  ClothingCategory: any = "Clothing"


  ngOnInit(): void {
    
    this.activeRoute.paramMap.subscribe({
      next: (params) => {
        
        const name = params.get('name')
        var Id = params.get('id')
        this.Category = name;

        this.productService.getMobilesDetails(name, Id).subscribe({
          next: (CategoryDetails) => {
            this.CategoryDetails = CategoryDetails;
            for (let j = 0; j < this.CategoryDetails.mobileImges.length; j++) {
              this.CategoryDetails.mobileImges[j]='data:image/png;base64,' + this.CategoryDetails.mobileImges[j];
              console.log(this.CategoryDetails.mobileImges[j])
          }
          }
        })
       this.reviewService.StartCommentConnection();
       console.log("sad")
       this.getReviews(Id);
     
      }
    })

  }

   getReviews(Id:any) {
    this.productService.getReviews(Id).subscribe({
      next: (response) => {
        this.reviews = response;
        for (let j = 0; j < this.reviews.length; j++) {
          this.reviews[j].imageSource='data:image/png;base64,' + this.reviews[j].imageSource;
      }

      }
    })
  }

  async appendComment() {
    console.log("sad2")
    setTimeout(async () => {
      await this.reviewService.addComment(this.Userid, this.newReview, this.CategoryDetails.id)
    }, 2000);
  }
  createComment() {
    this.appendComment();

  }
}
