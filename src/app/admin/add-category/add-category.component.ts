import { Component } from '@angular/core';
import { ICategory } from 'src/app/_models/Category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  // CategoryId:number=0;
  Categories:ICategory[]=[];
  errorMessage: any;
  RegisterForm:FormGroup;
  Category_register:ICategory={} as ICategory


  constructor(
    private fb:FormBuilder,
    private CategoryService:AdminService,
    private router:Router,
    private route: ActivatedRoute,){
      this.RegisterForm=this.fb.group({
            CategoryName:['',[Validators.required,Validators.minLength(3)],Validators.pattern('[a-zA-Z]+')],
         })
    }

    get CategoryName(){
      return this.RegisterForm.get('CategoryName')
    }


  ngOnInit(): void {
    this.GetCategories()
  }

  GetCategories(){
    this.CategoryService.GetCategories().subscribe(
      {
        next:totals=> this.Categories=totals,
        error:error=>this.errorMessage=error
      }
    )
  }

  submitData(){
    this.Category_register.name=this.CategoryName?.value;
    this.CategoryService.PUTCategory(this.Category_register,);
  }
}
