import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/_services/product-service.service';


@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})

export class ClothingComponent implements OnInit {

  url: string = "../assets/IPhone.jpg";
  imageChange(event: any){
      this.url = event.target.src;   
  }
   constructor(private productService:ProductServiceService){
  }
ClothingProducts:any=[]
FilterClothingProducts :any=[]
NameArray:any=[];
BrandNameArray:any=[];
PriceArray:any=[];
RateArray:any=[];
SizeArray:any=[];
GenderArray:any=[];
SeasonArray:any=[];
CountryArray:any=[];

onNameChange(Name:string,event:any){
  if(event.target.checked)
  {
    this.NameArray.push(Name)
  }
  else{
    this.NameArray=this.NameArray.filter((p: string)=>p!=Name)
  }
  this.filter()

}

onBrandChange(Name:string,event:any){
  if(event.target.checked)
  {
    this.BrandNameArray.push(Name)
  }
  else{
    this.BrandNameArray=this.BrandNameArray.filter((p: string)=>p!=Name)
  }
  this.filter()
}

onPriceChange(num:number,event:any){
  if(event.target.checked)
  {
    this.PriceArray.push(num)
  }
  else{
    this.PriceArray=this.PriceArray.filter((p: Number)=>p!=num)
  }
  this.filter()
}
onRateChange(num:number,event:any){
  if(event.target.checked)
  {
    this.RateArray.push(num)
  }
  else{
    this.RateArray=this.RateArray.filter((p: Number)=>p!=num)
  }
  this.filter()
}

onSizeChange(Name:string,event:any){
  if(event.target.checked)
  {
    this.SizeArray.push(Name)
  }
  else{
    this.SizeArray=this.SizeArray.filter((p: string)=>p!=Name)
  }
  this.filter()

}
onGenderChange(Name:string,event:any){
  if(event.target.checked)
  {
    this.GenderArray.push(Name)
  }
  else{
    this.GenderArray=this.GenderArray.filter((p: string)=>p!=Name)
  }
  this.filter()

}
onSeasonChange(Name:string,event:any){
  if(event.target.checked)
  {
    this.SeasonArray.push(Name)
  }
  else{
    this.SeasonArray=this.SeasonArray.filter((p: string)=>p!=Name)
  }
  this.filter()
}
onCountryChange(Name:string,event:any){
  if(event.target.checked)
  {
    this.CountryArray.push(Name)
  }
  else{
    this.CountryArray=this.CountryArray.filter((p:any)=>p!=Name)
  }
  this.filter()
}

filter(){
this.FilterClothingProducts=this.ClothingProducts
if(this.NameArray.length>0)
{
  this.NameFilter()
  console.log(this.FilterClothingProducts)
}
if(this.BrandNameArray.length>0)
{
  this.BrandFilter()
}

if(this.PriceArray.length>0)
{
 this.PriceFilter()
}

if(this.RateArray.length>0)
{
 this.RateFilter()
}
if(this.SeasonArray.length>0)
{
 this.SeasonFilter()
}
if(this.SizeArray.length>0)
{
 this.SizeFilter()
}

if(this.CountryArray.length>0)
{
 this.CountryFilter()
}
if(this.GenderArray.length>0){
  this.genderFilter()
}
}

NameFilter(){
  this.FilterClothingProducts=this.FilterClothingProducts.filter((Clothing:any)=>
    {return this.NameArray.includes(Clothing.mainProduct.name)})
}
BrandFilter(){
  this.FilterClothingProducts=this.FilterClothingProducts.filter((Clothing:any)=>
  {return this.BrandNameArray.includes(Clothing.mainProduct.brandName)})

}
PriceFilter(){

  this.PriceArray.forEach((element:any) => {
    if(element===0){
      this.FilterClothingProducts=this.FilterClothingProducts.filter((Clothing:any)=>Clothing.mainProduct.price<=6000)
    }

     if(element===1){
      this.FilterClothingProducts= this.FilterClothingProducts.filter((Clothing:any)=>Clothing.mainProduct.price>5000 &&Clothing.mainProduct.price<=15000)
    }
    if(element===2) {
      this.FilterClothingProducts=this.FilterClothingProducts.filter((Clothing:any)=>Clothing.mainProduct.price>15000)

    }
  });
}
RateFilter(){
  this.FilterClothingProducts=this.ClothingProducts.filter((Clothing:any)=>
    {return this.RateArray.includes(Clothing.mainProduct.rateValue)})
}
SeasonFilter(){

  this.FilterClothingProducts=this.FilterClothingProducts.filter((Clothing:any)=>
  {return this.SeasonArray.includes(Clothing.season)})
}
genderFilter(){
  this.FilterClothingProducts=this.FilterClothingProducts.filter((Clothing:any)=>
  {return this.GenderArray.includes(Clothing.gender)})
}

SizeFilter(){
  this.FilterClothingProducts=this.FilterClothingProducts.filter((Clothing:any)=>
  {return this.SizeArray.includes(Clothing.size)})
}
CountryFilter(){
  this.FilterClothingProducts=this.FilterClothingProducts.filter((Clothing:any)=>
  {return this.CountryArray.includes(Clothing.manufacturerCountry)})
}
  ngOnInit(): void
   {
    this.productService.getClothes().subscribe({
      next:(ClothingProductsResult)=>{
      this.ClothingProducts=ClothingProductsResult;
        console.log(this.ClothingProducts);
        this.FilterClothingProducts = ClothingProductsResult;
      },
      error:error=> console.log(error)
    })
  }

}
