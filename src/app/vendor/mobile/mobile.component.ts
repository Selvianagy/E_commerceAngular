import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mobile } from 'src/app/_models/Mobile';
import { IStore } from 'src/app/_models/store';
import { MobileService } from 'src/app/_services/Mobile.service';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit{

  mobiles:Mobile[]=[];
  mobile:Mobile|undefined;
  error:any;
  VendorId: string|null='';
  store:IStore|undefined ={}as IStore;
  errormessage: any;
  storeSpeciality: any;

  constructor(private adminservice:AdminService,private mobileservice:MobileService,private router:Router,private activatedRoute:ActivatedRoute){}

    ngOnInit(): void {
      this.VendorId = localStorage.getItem('userid');
      this.adminservice.GetStore( this.VendorId ).subscribe({
        next: (list) => (this.store = list),
        error: (err) => (this.errormessage = err),
      });
      this.storeSpeciality = this.store?.Specialty;
      this.GetMobiles();
    }

    GetMobiles()
    {
      this.mobileservice.GetAllMobiles(this.storeSpeciality).subscribe({
        next:(data)=>{this.mobiles=data},
        error:(error)=>{this.error=error}
      })
    }

    UpdateMobile(id:any)
    {
      this.router.navigate(['vendordashboard/mobiledetails'], {state:{Id:id}});
    }
    DeleteMobile()
    {

    }
}
