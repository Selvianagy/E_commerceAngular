import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/_services/product-service.service';


@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit{
  url: string = "../assets/IPhone.jpg";
  imageChange(event: any){
      this.url = event.target.src;   

  }
  constructor(private productService:ProductServiceService){
  }
  ComputerProducts:any[]=[];
  filteredComputerList:any[]=[];
  BrandArray:any[]=[]
  PriceArray:any[]=[]
  WeightArray:any[]=[]
  StoragetArray:any[]=[]
  RamArray:any[]=[]
  RateArray:any[]=[]
  CountryArray:any[]=[]
  ModelArray:any[]=[]
  ProcessorArray:any[]=[]
  GraphicsCardArray:any[]=[]
  OperatingSystemArray:any[]=[]
  HasTouchscreen:boolean=false
  HasMouse:boolean=false

  onHasTouchscreenChange(event: any) {
    if (event.target.checked) {
      this.HasTouchscreen = true;
    }
    else {
      this.HasTouchscreen = false;
    }
    this.filter()
  }
 
  onHasMouseChange(event: any) {
    if (event.target.checked) {
      this.HasMouse = true;
    }
    else {
      this.HasMouse= false;
    }
    this.filter()
  }
  onModelChange(Name:string,event:any){
    if(event.target.checked)
    {
      this.ModelArray.push(Name)
    }
    else{
      this.ModelArray=this.ModelArray.filter(b=>b !=Name)
    }
    this.filter()
  }

  onProcessorChange(Name:string,event:any){
    if(event.target.checked)
    {
      this.ProcessorArray.push(Name)
    }
    else{
      this.ProcessorArray= this.ProcessorArray.filter(b=>b !=Name)
    }
    this.filter()
  }

  onOperatingSystemChange(Name:string,event:any){
    if(event.target.checked)
    {
      this.OperatingSystemArray.push(Name)
    }
    else{
      this.OperatingSystemArray= this.OperatingSystemArray.filter(b=>b !=Name)
    }
    this.filter()
  }

  onGraphicsCardChange(Name:string,event:any){
    if(event.target.checked)
    {
      this.GraphicsCardArray.push(Name)
    }
    else{
      this.GraphicsCardArray= this.GraphicsCardArray.filter(b=>b !=Name)
    }
    this.filter()
  }

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

onCountryChange(Name:string,event:any){
  if(event.target.checked)
  {
    this.CountryArray.push(Name)
  }
  else{
    this.CountryArray=this.CountryArray.filter(p=>p!=Name)
  }
  this.filter()
}
filter(){
  this.filteredComputerList=this.ComputerProducts
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
  if(this.StoragetArray.length>0){
    this.StorageFilter()
  }
  if(this.RamArray.length>0){
    this.RamFilter()
  }
  if(this.RateArray.length>0){
    this.RateFilter()
  }
  if(this.CountryArray.length>0){
    this.CountryFilter()
  }
  if(this.GraphicsCardArray.length>0){
    this.GraphicFilter()
  }

  if(this.OperatingSystemArray.length>0){
    this.OperatingFilter()
  }
  if(this.ProcessorArray.length>0){
    this.ProcessorFilter()
  }

  if(this.ModelArray.length>0){
    this.ModelFilter()
  }

  if(this.HasMouse===true){
    this.HasMouseFilter()
  }

  if(this.HasTouchscreen===true){
    this.HasTouchScreenFilter()
  }

}

BrandFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=>
   {return this.BrandArray.includes(computer.mainProduct.brandName)})
}

PriceFilter(){
  this.PriceArray.forEach(element => {
    if(element===0){
      this.filteredComputerList=this.filteredComputerList.filter(computer=>computer.mainProduct.price>=2000&& computer.mainProduct.price<=10000)
    }

    else if(element===1){
      this.filteredComputerList=this.filteredComputerList.filter(computer=>computer.mainProduct.price > 10000 && computer.mainProduct.price<50000)
    }
    else{
      this.filteredComputerList=this.filteredComputerList.filter(computer=>computer.mainProduct.price >=50000)

    }
  });
}

WeightFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=>
    {return this.WeightArray.includes(computer.weight)})
}

StorageFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=>
    {return this.StoragetArray.includes(computer.storageCapacity)})
}

RamFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=>
    {return this.RamArray.includes(computer.ram)})
}
CountryFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=>
    {return this.CountryArray.includes(computer.countryOfOrigin)})
}

OperatingFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=>
    {return this.OperatingSystemArray.includes(computer.operatingSystem)})
}
ProcessorFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=>
    {return this.ProcessorArray.includes(computer.processor)})
}
ModelFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=>
    {return this.ModelArray.includes(computer.model)})
}
GraphicFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=>
    {return this.GraphicsCardArray.includes(computer.graphicsCard)})
}
HasMouseFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=> computer.hasTouchscreen === true)
}
HasTouchScreenFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(computer=> computer.hasMouse === true)
}
RateFilter(){
  this.filteredComputerList=this.filteredComputerList.filter(mobile=>
    {return this.RateArray.includes(mobile.mainProduct.rateValue)})
}

ngOnInit(): void {
  
  this.productService.getComputers().subscribe({
    next:(MobileProductsResult)=>{
    this.ComputerProducts=MobileProductsResult;
      console.log(this.ComputerProducts);
      this.filteredComputerList = MobileProductsResult;
    },
    error:error=> console.log(error)
  })
}
}
  

