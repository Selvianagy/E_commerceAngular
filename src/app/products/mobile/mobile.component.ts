import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from 'src/app/_services/product-service.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit{

    url: string = "../assets/IPhone.jpg";
    imageChange(event: any){
        this.url = event.target.src;
    }
  
  MobileProducts:any[]=[];
  filteredMobilesList:any[]=this.MobileProducts;

  BrandArray:any[]=[]
  PriceArray:any[]=[]
  WeightArray:any[]=[]
  CameraArray:any[]=[]
  DiscountArray:any[]=[]
  StoragetArray:any[]=[]
  RamArray:any[]=[]
  RateArray:any[]=[]
  HasfrontCamera:boolean=false
  HasWaterProof:boolean=false

 

 constructor(private productService:ProductServiceService) {}

 onCheckboxBrandChange(brand:string,event:any){
    if(event.target.checked)
    {
      this.BrandArray.push(brand)
    }
    else{
      this.BrandArray=this.BrandArray.filter(b=>b !=brand)
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
onCheckboxRamChange(Ram:number,event:any){
  if(event.target.checked)
  {
    this.RamArray.push(Ram)
  }
  else{
    this.RamArray=this.RamArray.filter(p=>p !=Ram)
  }
  this.filter()
}
onCheckboxWeightChange(Weight:number,event:any){
  if(event.target.checked)
  {
    this.WeightArray.push(Weight)
  }
  else{
    this.WeightArray=this.WeightArray.filter(p=>p !=Weight)
  }
  this.filter()

}

onCheckboxStorageChange(Storage:number,event:any){
  if(event.target.checked)
  {
    this.StoragetArray.push(Storage)
  }
  else{
    this.StoragetArray=this.StoragetArray.filter(p=>p !=Storage)
  }
  this.filter()

}

onCheckboxCameraChange(Camera:number,event:any){
  if(event.target.checked)
  {
    this.CameraArray.push(Camera)
  }
  else{
    this.CameraArray=this.CameraArray.filter(p=>p !=Camera)
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



onCheckboxWaterPrrofChange(event: any) {
  if (event.target.checked) {
    this.HasWaterProof = true;
  }
  else {
    this.HasWaterProof = false;
  }
  this.filter()
}

onCheckboxFrontCameraChange(event:any){

  if(event.target.checked)
  {
   this.HasfrontCamera=true;
  }
  else{
    this.HasfrontCamera=false;
  }
  this.filter()
}
  filter(){
    this.filteredMobilesList=this.MobileProducts
    if(this.BrandArray.length>0)
    {
      this.BrandFilter()
    }
    if(this.PriceArray.length>0)
    {
      this.PriceFilter()
    }
    if(this.WeightArray.length>0)
    {
      this.WeightFilter()
    }
    if(this.CameraArray.length>0)
    {
      this.CameraFilter()
    }
    if(this.StoragetArray.length>0){
      this.StorageFilter()
    }
    if(this.RamArray.length>0){
      this.RamFilter()
    }
    if(this.RateArray.length>0){
      this.RateFilter()
    }
    if(this.DiscountArray.length>0){
    this.DiscountFilter()
    }
    if (this.HasWaterProof === true) {
      this.HasWaterProofFilter()
    }

    if (this.HasfrontCamera === true) {
      this.HasFrontCameraFilter()
    }
  } 

  BrandFilter(){
     this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>
      {return this.BrandArray.includes(mobile.brandName)})
  }

  PriceFilter(){
    this.PriceArray.forEach(element => {
      if(element===0){
        this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>mobile.price>=2000&& mobile.price<=7000)
      }

      else if(element===1){
        this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>mobile.price>=8000 && mobile.price<=11000)
      }
      else{
        this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>mobile.price>11000)

      }
    });
  }

  WeightFilter(){
    this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>
      {return this.WeightArray.includes(mobile.weight)})
  }

  CameraFilter(){
    this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>
      {return this.CameraArray.includes(mobile.numberOfCamera)}) 
  }
  StorageFilter(){
    this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>
      {return this.StoragetArray.includes(mobile.storageCapacity)}) 
  }
  RamFilter(){
    this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>
      {return this.RamArray.includes(mobile.ram)})
  }

  RateFilter(){
    this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>
      {return this.RateArray.includes(mobile.rateValue)})
  }
  DiscountFilter(){
    this.filteredMobilesList=this.filteredMobilesList.filter(mobile=>
      {return this.DiscountArray.includes(mobile.discount)})

    
  }
  HasWaterProofFilter() {
    this.filteredMobilesList = this.filteredMobilesList.filter(mobile => mobile.isWaterproof === true)
  }
 

  HasFrontCameraFilter(){
    this.filteredMobilesList = this.filteredMobilesList.filter(mobile => mobile.hasFrontCamera === true)
  }
 
  ngOnInit():void{
    
    this.productService.getMobiless().subscribe({
           next:(MobileProductsResult)=>{
           this.MobileProducts=MobileProductsResult;
             console.log(this.MobileProducts);
             this.filteredMobilesList = MobileProductsResult;
             for (let i = 0; i < this.filteredMobilesList.length; i++) {
              console.log(this.filteredMobilesList[i].mobileImges.length)
              for (let j = 0; j < this.filteredMobilesList[i].mobileImges.length; j++) {
                  this.filteredMobilesList[i].mobileImges[j]='data:image/png;base64,' + this.filteredMobilesList[i].mobileImges[j];
              }
            }
            console.log(this.filteredMobilesList)
           },
           error:error=> console.log(error)
         })
    }
}
