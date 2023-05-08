import { Component } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router,ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/_models/Category';
import { IBrand } from 'src/app/_models/Brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

  brands:IBrand[]=[];
  Categories:ICategory[]=[];
  BrandForm: FormGroup;
  Register_Brand:IBrand= {} as IBrand
  selectedCategoryId: number=0;
  errorMessage: any;

  ngOnInit(): void {
    this.Get_Categories();
  }

  get BrandName(){
    return this.BrandForm.get('BrandName')
  }

  get CategoryId()
  {
    return this.BrandForm.get('selectedCategoryId')
  }
  Get_Categories()
  {
    this.categoryService.GetCategories().subscribe({
      next:list=>this.Categories=list,
      error:error=>this.errorMessage=error
    })
  }

  submitData() {
    this.Register_Brand.Name=this.BrandName?.value;
    this.Register_Brand.CategoryId=this.CategoryId?.value;

  }

constructor(
  private categoryService:AdminService,

  private fb:FormBuilder,
  private router:Router,
  private route: ActivatedRoute,){
    this.BrandForm=this.fb.group({
      BrandName:['',[Validators.required,Validators.minLength(3)],Validators.pattern('[a-zA-Z]+')],
      selectedCategoryId: ['', Validators.required]
       })
  }


  GetBrands()
  {
    this.categoryService.GetBrands().subscribe({
      next:list=>this.brands=list,
      error:error=>this.errorMessage=error
    })
  }

}
