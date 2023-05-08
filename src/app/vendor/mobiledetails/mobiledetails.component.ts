import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBrand } from 'src/app/_models/Brand';
import { ICategory } from 'src/app/_models/Category';
import { Mobile } from 'src/app/_models/Mobile';
import { IStore } from 'src/app/_models/store';
import { MobileService } from 'src/app/_services/Mobile.service';
import { AdminService } from 'src/app/_services/admin.service';
import { CategoryServiceService } from 'src/app/_services/category.service.service';

@Component({
  selector: 'app-mobiledetails',
  templateUrl: './mobiledetails.component.html',
  styleUrls: ['./mobiledetails.component.scss']
})
export class MobiledetailsComponent implements OnInit{
  categories:ICategory[]=[];
  Brands:IBrand[]=[];
  Brandid:any;
  MobileForm:FormGroup;
  mobile:Mobile={}as Mobile
  Register_mobile:Mobile={}as Mobile;
  errorMessage: any;
  selectedBrandId:any;
  imgs:File[]=[];
  VendorId: string | null = '';
  store: IStore | undefined;
  storeSpeciality: any;
  errormessage: any;
  state: any;
  mobileId: any;

  ngOnInit(): void {
    this.GetCategories();
    this.GetBrands();
    this.VendorId = localStorage.getItem('userid');
    this.adminservice.GetStore( this.VendorId ).subscribe({
      next: (list) => (this.store = list),
      error: (err) => (this.errormessage = err),
    });
    this.storeSpeciality = this.store?.Specialty;



    // this.state=this.router.getCurrentNavigation()?.extras.state;
    // this.mobileId=this.state['Id']
    // console.log(this.mobileId);
  }
  constructor(
    private fb:FormBuilder,
    private mobileservice:MobileService,
    private router:Router,
    private route: ActivatedRoute,
    private adminservice:AdminService,
  )
  {
    this.MobileForm=this.fb.group({
      MobileName: '',
      BrandName: '',
      selectedBrandId:0,
      MobileDescription:'',
      MobilePrice: 0,
      MobileDiscount: 0,
      Images:this.imgs,
      ScreenSize: 0,
      RAM: 0,
      NumSIMCards: 0,
      BatteryLife: 0,
      StorageCapacity: 0,
      Weight: 0,
      HasFingerprintScanner: false,
      NumberOfCamera: 0,
      HasFrontCamera: false,
      HasBackCamera: false,
      HasNFC: false,
      HasBluetooth: false,
      IsWaterproof: false,
      OperatingSystem: '',
      Screentype: 0,
      Quantity: 0,
      RateValue: 0,
      BrandId: 0,
      CategoryId: 0,
      StoreId: 0
    })

    this.GetCategories();
    this.GetBrands();
    this.GetMobileById(this.mobileId);
  }
  get BrandId()
  {
    return this.MobileForm.get('selectedBrandId');
  }

  // get CategoryId()
  // {
  //   return this.MobileForm.get('selectedBrandId');
  // }

  GetCategories()
  {
    this.adminservice.GetCategories().subscribe({
      next:(data:ICategory[])=>this.categories=data,
      error:(error:any)=>this.errorMessage=error
    })
  }

  GetBrands()
  {
    this.adminservice.GetBrands().subscribe({
      next:(data:IBrand[])=>this.Brands=data,
      error:(error:any)=>this.errorMessage=error
    })
  }

  onFileSelected(event:any)
  {
    this.imgs = event.target.files;
  }
  submitData()
  {
    const formData = this.MobileForm.value;
    this.Brandid=this.BrandId?.value
    formData.Images=this.imgs;
     console.log(formData.Images);
     if(this.MobileForm.valid)
     {
        this.mobileservice.AddMobile(formData,this.storeSpeciality)
        this.MobileForm.reset();
     }
     console.log(this.imgs);
  }

  GetMobileById(id:any)
  {
    this.mobileservice.GetMobile(id,this.storeSpeciality)?.subscribe({
      next:data=>this.mobile=data,
      error:(error:any)=>this.errorMessage=error
    })

    this.MobileForm.patchValue({






    })
  }



}
