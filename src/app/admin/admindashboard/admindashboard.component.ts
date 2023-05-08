import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Import RouterModule
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITotalInfo } from 'src/app/_models/TotalInfo';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent {


  Totals:ITotalInfo | undefined;
  errorMessage: any;



  constructor(private TotalService:AdminService, private router :Router,private activatedRoute:ActivatedRoute ){}
  ngOnInit(): void {

    this.GetTotalInfo();


  }
  GetTotalInfo(){
    this.TotalService.GetTotals().subscribe(
      {
        next:totals=> this.Totals=totals,
        error:error=>this.errorMessage=error

      }
    )

  }
  ShowDashboard()
  {
    this.router.navigate(["admindashboard"]);
  }
  ShowNotification()
  {
    this.router.navigate(["notification"],{relativeTo:this.activatedRoute});
  }
  ADD_Category(){
    this.router.navigate(["category"],{relativeTo:this.activatedRoute});
  }

  Update_category(){
    // this.router.navigate(["updatecategory"],{relativeTo:this.activatedRoute});
  }
  ShowStores(){
    this.router.navigate(["stores"],{relativeTo:this.activatedRoute});
  }
  ShowProfits(){
    this.router.navigate(["profits"],{relativeTo:this.activatedRoute});
  }
  Add_Brand()
  {
    this.router.navigate(["brand"],{relativeTo:this.activatedRoute});
  }
  
}
