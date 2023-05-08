import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/_models/Book';
import { Clothing } from 'src/app/_models/Clothing';
import { Computer } from 'src/app/_models/Computer';
import { Mobile } from 'src/app/_models/Mobile';
import { TV } from 'src/app/_models/TV';
import { VendorInfo } from 'src/app/_models/VendorInfo';
import { IStore } from 'src/app/_models/store';
import { MobileService } from 'src/app/_services/Mobile.service';
import { AdminService } from 'src/app/_services/admin.service';
import { VendorService } from 'src/app/_services/vendor.service';

@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.scss'],
})
export class VendordashboardComponent implements OnInit {
  VendorId: string | null = '';
  mobiles: Mobile[] = [];
  mobile: Mobile | undefined;
  computers: Computer[] = [];
  computer: Computer | undefined;
  books: Book[] = [];
  book: Book | undefined;
  clothings: Clothing[] = [];
  clothing: Clothing | undefined;
  tvs: TV[] = [];
  tv: TV | undefined;
  Info: VendorInfo | undefined;
  store: IStore | undefined;
  storeSpeciality: any;
  errormessage: any;

  ngOnInit(): void {
    this.VendorId = localStorage.getItem('userid');
    this.GetStore(this.VendorId);
  }
  constructor(
    private vendorservice: VendorService,
    private storeService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ShowDashboard() {
    this.router.navigate(['vendordashboard']);
  }
  ShowProducts() {
    this.storeSpeciality='Mobile';
    if (this.storeSpeciality  == 'Mobile') {
      this.router.navigate(['mobile'], { relativeTo: this.activatedRoute });
    } else if (this.store?.Specialty == 'Computer') {
      this.router.navigate(['computer'], { relativeTo: this.activatedRoute });
    } else if (this.store?.Specialty == 'Book') {
      this.router.navigate(['book'], { relativeTo: this.activatedRoute });
    } else if (this.store?.Specialty == 'Clothing') {
      this.router.navigate(['clothing'], { relativeTo: this.activatedRoute });
    } else if (this.store?.Specialty == 'TV') {
      this.router.navigate(['tv'], { relativeTo: this.activatedRoute });
    }
  }
  ADD_Product() {
    this.storeSpeciality='Mobile';
    if (this.storeSpeciality == 'Mobile')
    {
      this.router.navigate(['mobiledetails'], { relativeTo: this.activatedRoute });
    }
    else if (this.store?.Specialty == 'Computer')
     {
      this.router.navigate(['computerdetails'], { relativeTo: this.activatedRoute });
    }
    else if (this.store?.Specialty == 'Book')
    {
      this.router.navigate(['bookdetails'], { relativeTo: this.activatedRoute });
    }
    else if (this.store?.Specialty == 'Clothing')
    {
      this.router.navigate(['clothingdetails'], { relativeTo: this.activatedRoute });
    }
    else if (this.store?.Specialty == 'TV')
    {
      this.router.navigate(['tvdetails'], { relativeTo: this.activatedRoute });
    }
  }
  GetDiscounts() {}
  UpdateDiscounts() {}
  GetStore(id: any) {
    this.storeService.GetStore(id).subscribe({
      next: (list) => (this.store = list),
      error: (err) => (this.errormessage = err),
    });
    this.storeSpeciality = this.store?.Specialty;
  }
  GetInfo() {
    this.vendorservice.GetInfo().subscribe({
      next: (info) => (this.Info = info),
      error: (err) => (this.errormessage = err),
    });
  }
  // GetMobiles()
  // {
  //    this.mobileservice.GetAllMobiles().subscribe({
  //     next:total=>this.mobiles=total,
  //     error:error=>this.errorMessage=error
  //    })
  // }
}
