import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../CustomValidation/ConfirmPassword';
import {AuthService} from 'src/app/_services/auth.service'
import { CategoryServiceService } from 'src/app/_services/category.service.service';
import { ICategory } from 'src/app/_models/Category';
import { IVendor } from 'src/app/_models/vendoreregister';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.scss']
})
export class VendorRegisterComponent {
  VendorRegisterForm:FormGroup;
  errorMessage:string=""
  Categories:ICategory[]=[]
  registerVendor:IVendor={} as IVendor

  constructor(private fb:FormBuilder,private category:CategoryServiceService,private registertion:AuthService){
    this.VendorRegisterForm=this.fb.group({
      UserName:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      Email:['',[Validators.required,Validators.pattern('^[A-Za-z0-9.]+@[A-Za-z]+\.[A-Za-z]+$')]],
      Password:['',[Validators.required]],
      ConfirmPassword  :['',[Validators.required]],
      PhoneNumber:['',[Validators.required,Validators.pattern("[0-9]+")]],
      VendorImage:['',[Validators.required]],
       Gender:['',[Validators.required]],
       Country:['',[Validators.required]],
       City:['',[Validators.required]],
       StoreName:['',[Validators.required]],
       StoreAddress:['',[Validators.required]],
       StoreDescription:['',[Validators.required]],
       StoreSpecialty:['',[Validators.required]],
       Categoryid:['',[Validators.required]],
       StoreImage:['',[Validators.required]],
    },{validator:[ConfirmPasswordValidator]});

  }
  get StoreName(){
    return this.VendorRegisterForm.get('StoreName');
  }
  get StoreAddress(){
    return this.VendorRegisterForm.get('StoreAddress');
  }
  get StoreDescription(){
    return this.VendorRegisterForm.get('StoreDescription');
  }
  get StoreSpecialty(){
    return this.VendorRegisterForm.get('StoreSpecialty');
  }
  get Categoryid(){
    return this.VendorRegisterForm.get('Categoryid');
  }
  get StoreImage(){
    return this.VendorRegisterForm.get('StoreImage');
  }
  get Country(){
    return this.VendorRegisterForm.get('Country');
  }
  get City(){
    return this.VendorRegisterForm.get('City');
  }
  get Gender(){
    return this.VendorRegisterForm.get('Gender');
  }
 get Username(){
    return this.VendorRegisterForm.get('UserName');
  }
  get VendorImage(){
    return this.VendorRegisterForm.get('VendorImage');
  }
  get PhoneNumber(){
    return this.VendorRegisterForm.get('PhoneNumber');
  }
  get Email(){
    return this.VendorRegisterForm.get('Email');
  }
  get Password(){
    return this.VendorRegisterForm.get('Password');
  }
  get Confirmpassword(){
    return this.VendorRegisterForm.get('ConfirmPassword');
  }

  registerData(){
    this.registerVendor.ConfirmPassword=this.Confirmpassword?.value
    this.registerVendor.UserName=this.Username?.value
    this.registerVendor.Password=this.Password?.value
   // this.registerVendor.VendorImage=this.Image?.value
    this.registerVendor.PhoneNumber=this.PhoneNumber?.value
    this.registerVendor.Email=this.Email?.value
    this.registerVendor.Country=this.Country?.value
    this.registerVendor.City=this.City?.value
    this.registerVendor.Gender=this.Gender?.value
    this.registerVendor.StoreAddress=this.StoreAddress?.value
    this.registerVendor.StoreName=this.StoreName?.value
    this.registerVendor.StoreDescription=this.StoreDescription?.value
    this.registerVendor.StoreSpecialty=this.StoreSpecialty?.value
    this.registerVendor.Categoryid=this.Categoryid?.value
   // this.registerVendor.StoreImage=this.StoreImage?.value

     console.log(this.registerVendor)
    this.registertion.registerVendor(this.registerVendor).subscribe({
      next:data=>console.log(data),
      error:err=>this.errorMessage=err
     })
  }

  ngOnInit() {
    this.category.GetCategories().subscribe({
      next:data=>this.Categories=data,
      error:err=>this.errorMessage=err
     })
   
  }
}