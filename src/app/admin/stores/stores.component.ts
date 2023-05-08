import { Component } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import {  Router,ActivatedRoute } from '@angular/router';
import { IStore } from 'src/app/_models/store';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  Stores:IStore[]=[];
  Store:any;
  errormessage: any;

  constructor(private storeService:AdminService,private router:Router) {}

    ngOnInit(): void {
      this.GetStores();
    }

    GetStores()
    {
      this.storeService.GetStores().subscribe({
        next:list=>this.Stores=list,
        error:err=>this.errormessage=err
      })
    }
    GetStore(id:any)
    {
      this.storeService.GetStore(id).subscribe({
        next:list=>this.Store=list,
        error:err=>this.errormessage=err
      })
    }

    Edite(id:any)
    {
      this.router.navigate(['admindashboard/updatestore',{id:id}])
    }
    Delete(id:any)
    {
      this.router.navigate(['admindashboard/deletestore',{id:id}])
    }
}
