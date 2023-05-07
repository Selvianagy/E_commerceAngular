import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/_services/product-service.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  url: string = "../assets/IPhone.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }


BookProducts:any[]=[];
filteredBooksList:any[]=this.BookProducts;

TypeArray:any[]=[]
AuthorsNameArray:any[]=[]
PublisherArray:any[]=[]
PriceArray:any[]=[]
LanguageArray:any[]=[]
PageNumberrray:any[]=[]

USBPortsArray:any[]=[]
CameraArray:any[]=[]
DiscountArray:any[]=[]
ScreenSizeArray:any[]=[]
ResolutionArray:any[]=[]
RateArray:any[]=[]
HasBluetooth:boolean=false
HasWIFI:boolean=false
HasCurve:boolean=false
IsSmart:boolean=false
Is3D:boolean=false





constructor(private productService:ProductServiceService) {}

onCheckboxTypeChange(Type:string,event:any){
  if(event.target.checked)
  {
    this.TypeArray.push(Type)
  }
  else{
    this.TypeArray=this.TypeArray.filter(b=>b !=Type)
  }
  this.filter()
}
onCheckboxAuthorNameChange(name:string,event:any){
  if(event.target.checked)
  {
    this.AuthorsNameArray.push(name)
  }
  else{
    this.AuthorsNameArray=this.AuthorsNameArray.filter(b=>b !=name)
  }
  this.filter()
}
onCheckboxPublisherChange(name:string,event:any){
  if(event.target.checked)
  {
    this.PublisherArray.push(name)
  }
  else{
    this.PublisherArray=this.PublisherArray.filter(b=>b !=name)
  }
  this.filter()
}
onCheckboxLanguageChange(name:string,event:any){
  if(event.target.checked)
  {
    this.LanguageArray.push(name)
  }
  else{
    this.LanguageArray=this.LanguageArray.filter(b=>b !=name)
  }
  this.filter()
}

onCheckboxPageChange(number:number,event:any){
if(event.target.checked)
{
  this.PriceArray.push(number)
}
else{
  this.PageNumberrray=this.PageNumberrray.filter(p=>p !=number)
}
this.filter()

}
onCheckboxPriceChange(Price:number,event:any){
  if(event.target.checked)
  {
    this.PriceArray.push(Price)
  }
  else{
    this.PriceArray=this.PriceArray.filter(p=>p !=Price)
  }
  this.filter()
  
  }


onCheckboxRateChange(num:number,event:any){
if(event.target.checked)
{
  this.RateArray.push(num )
}
else{
  this.RateArray=this.RateArray.filter(p=>p!=num)
}
this.filter()
}
onCheckboxDiscountChange(num:number,event:any){
if(event.target.checked)
{
  this.DiscountArray.push(num )
}
else{
  this.DiscountArray=this.DiscountArray.filter(p=>p!=num)
}
this.filter()
}




filter(){
  this.filteredBooksList=this.BookProducts
  if(this.TypeArray.length>0)
  {
    this.TypeFilter()
  }
  if(this.AuthorsNameArray.length>0)
  {
    this.AuthorNameFilter()
  }
  if(this.PublisherArray.length>0)
  {
    this.PublisherFilter()
  }
  if(this.LanguageArray.length>0)
  {
    this.LanguageFilter()
  }
  if(this.PageNumberrray.length>0)
  {
    this.PageNumberFilter()
  }

  if(this.PriceArray.length>0)
  {
    this.PriceFilter()
  }
 
  if(this.RateArray.length>0){
    this.RateFilter()
  }
  if(this.DiscountArray.length>0){
  this.DiscountFilter()
  }
 

} 

TypeFilter(){
   this.filteredBooksList=this.filteredBooksList.filter(Book=>
    {return this.TypeArray.includes(Book.type)})
}
AuthorNameFilter(){
  this.filteredBooksList=this.filteredBooksList.filter(Book=>
   {return this.AuthorsNameArray.includes(Book.authorName)})
}
PublisherFilter(){
  this.filteredBooksList=this.filteredBooksList.filter(Book=>
   {return this.PublisherArray.includes(Book.publisher)})
}
LanguageFilter(){
  this.filteredBooksList=this.filteredBooksList.filter(Book=>
   {return this.LanguageArray.includes(Book.language)})
}
PageNumberFilter(){
  this.PriceArray.forEach(element => {
    if(element===0){
      this.filteredBooksList=this.filteredBooksList.filter(Book=>Book.pageCount>=100&& Book.pageCount<=200)
    }

    else if(element===1){
      this.filteredBooksList=this.filteredBooksList.filter(Book=>Book.pageCount>=200 && Book.pageCount<=350)
    }
    else{
      this.filteredBooksList=this.filteredBooksList.filter(Book=>Book.pageCount>350)

    }
  });
}
PriceFilter(){
  this.PriceArray.forEach(element => {
    if(element===0){
      this.filteredBooksList=this.filteredBooksList.filter(Book=>Book.mainProduct.price>=100&& Book.mainProduct.price<=250)
    }

    else if(element===1){
      this.filteredBooksList=this.filteredBooksList.filter(Book=>Book.mainProduct.price>=250 && Book.mainProduct.price<=400)
    }
    else{
      this.filteredBooksList=this.filteredBooksList.filter(Book=>Book.mainProduct.price>400)

    }
  });
}

RateFilter(){
  this.filteredBooksList=this.filteredBooksList.filter(Book=>
    {return this.RateArray.includes(Book.mainProduct.rates)})
}
DiscountFilter(){
  this.filteredBooksList=this.filteredBooksList.filter(Book=>
    {return this.DiscountArray.includes(Book.mainProduct.discount)})
 
}





ngOnInit():void{
  
  this.productService.getBooks().subscribe({
         next:(BookProductsResult)=>{
         this.BookProducts=BookProductsResult; 
         for (let i = 0; i < this.BookProducts.length; i++) {
          console.log(this.BookProducts[i].mobileImges.length)
          for (let j = 0; j < this.BookProducts[i].mobileImges.length; j++) {
              this.BookProducts[i].mobileImges[j]='data:image/png;base64,' + this.BookProducts[i].mobileImges[j];
          }
        }
         this.filteredBooksList = BookProductsResult;

         for (let i = 0; i < this.filteredBooksList.length; i++) {
          console.log(this.filteredBooksList[i].mobileImges.length)
          for (let j = 0; j < this.filteredBooksList[i].mobileImges.length; j++) {
              this.filteredBooksList[i].mobileImges[j]='data:image/png;base64,' + this.filteredBooksList[i].mobileImges[j];
          }
        }
        
         },
         error:error=> console.log(error)
       })
       

  }
}
