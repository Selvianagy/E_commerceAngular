import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/_services/product-service.service';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  url: string = "../assets/IPhone.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }


TVProducts:any[]=[];
filteredTVsList:any[]=this.TVProducts;

BrandArray:any[]=[]
PriceArray:any[]=[]
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
onCheckboxResolutionChange(Resolution:number,event:any){
if(event.target.checked)
{
  this.ResolutionArray.push(Resolution)
}
else{
  this.ResolutionArray=this.ResolutionArray.filter(p=>p !=Resolution)
}
this.filter()
}
onCheckboxUSBPrtsChange(UsB:number,event:any){
if(event.target.checked)
{
  this.USBPortsArray.push(UsB)
}
else{
  this.USBPortsArray=this.USBPortsArray.filter(p=>p !=UsB)
}
this.filter()

}

onCheckboxScreenChange(ScreenSize:number,event:any){
if(event.target.checked)
{
  this.ScreenSizeArray.push(ScreenSize)
}
else{
  this.ScreenSizeArray=this.ScreenSizeArray.filter(p=>p !=ScreenSize)
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

onCheckboxBluetoothChange(event:any){
if(event.target.checked)
{
 this.HasBluetooth=true;
}
else{
  this.HasBluetooth=false;
}
this.filter
}

onCheckboxWIFIChange(event: any) {
  if (event.target.checked) {
    this.HasWIFI = true;
  }
  else {
    this.HasWIFI = false;
  }
  this.filter()
}

onCheckboxSmartChange(event: any) {

  if (event.target.checked) {
    this.IsSmart = true;
  }
  else {
    this.IsSmart = false;
  }
  this.filter()
}
onCheckbox3DChange(event: any) {

  if (event.target.checked) {
    this.Is3D = true;
  }
  else {
    this.Is3D = false;
  }
  this.filter()
}
onCheckboxCurveChange(event: any) {

  if (event.target.checked) {
    this.HasCurve = true;
  }
  else {
    this.HasCurve = false;
  }
  this.filter()
}


filter(){
  this.filteredTVsList=this.TVProducts
  if(this.BrandArray.length>0)
  {
    this.BrandFilter()
  }
  if(this.PriceArray.length>0)
  {
    this.PriceFilter()
  }
  if(this.USBPortsArray.length>0)
  {
    this.UsBPortFilter()
  }
  if(this.ScreenSizeArray.length>0){
    this.ScreenSizeFilter()
  }
  if(this.ResolutionArray.length>0){
    this.ResolutionFilter()
  }
  if(this.RateArray.length>0){
    this.RateFilter()
  }
  if(this.DiscountArray.length>0){
  this.DiscountFilter()
  }
  if(this.HasBluetooth===true){
   this.HasHasBluetoothFilter()
   console.log(this.filteredTVsList)
  }
  if(this.HasWIFI===true){
    this.HasHasWIFIFilter()
    console.log(this.filteredTVsList)
   }
   if(this.IsSmart===true){
    this.HasHasSmartFilter()
    console.log(this.filteredTVsList)
   }
   if(this.Is3D===true){
    this.Has3DFilter()
    console.log(this.filteredTVsList)
   }
   if(this.HasCurve===true){
    this.HasCurveFilter()
    console.log(this.filteredTVsList)
   }

} 

BrandFilter(){
   this.filteredTVsList=this.filteredTVsList.filter(TV=>
    {return this.BrandArray.includes(TV.mainProduct.brandName)})
}

PriceFilter(){
  this.PriceArray.forEach(element => {
    if(element===0){
      this.filteredTVsList=this.filteredTVsList.filter(TV=>TV.mainProduct.price>=2000&& TV.mainProduct.price<=7000)
    }

    else if(element===1){
      this.filteredTVsList=this.filteredTVsList.filter(TV=>TV.mainProduct.price>=8000 && TV.mainProduct.price<=11000)
    }
    else{
      this.filteredTVsList=this.filteredTVsList.filter(TV=>TV.mainProduct.price>11000)

    }
  });
}

UsBPortFilter(){
  this.filteredTVsList=this.filteredTVsList.filter(TV=>
    {return this.USBPortsArray.includes(TV.numUSBPorts)})
}

ScreenSizeFilter(){
  this.filteredTVsList=this.filteredTVsList.filter(TV=>
    {return this.ScreenSizeArray.includes(TV.screenSize)}) 
}
ResolutionFilter(){
  this.filteredTVsList=this.filteredTVsList.filter(TV=>
    {return this.ResolutionArray.includes(TV.resolution)})
}

RateFilter(){
  this.filteredTVsList=this.filteredTVsList.filter(TV=>
    {return this.RateArray.includes(TV.mainProduct.rates)})
}
DiscountFilter(){
  this.filteredTVsList=this.filteredTVsList.filter(TV=>
    {return this.DiscountArray.includes(TV.mainProduct.discount)})

  
}
HasHasBluetoothFilter(){
  this.filteredTVsList = this.filteredTVsList.filter(TV => TV.hasBluetooth === true)

}
HasHasWIFIFilter(){
  this.filteredTVsList = this.filteredTVsList.filter(TV => TV.hasWIFI === true)

}
HasHasSmartFilter(){
  this.filteredTVsList = this.filteredTVsList.filter(TV => TV.isSmartTV === true)

}

Has3DFilter(){
  this.filteredTVsList = this.filteredTVsList.filter(TV => TV.is3D === true)

}

HasCurveFilter(){
  this.filteredTVsList = this.filteredTVsList.filter(TV => TV.isCurved === true)

}



ngOnInit():void{
  
  this.productService.getTVs().subscribe({
         next:(TVProductsResult)=>{
         this.TVProducts=TVProductsResult;
           console.log(this.TVProducts);
           this.filteredTVsList = TVProductsResult;
         },
         error:error=> console.log(error)
       })
       

  }
}
