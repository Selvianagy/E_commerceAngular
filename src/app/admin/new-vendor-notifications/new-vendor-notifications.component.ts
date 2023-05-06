import { Component } from '@angular/core';
import { INotification } from 'src/app/_models/Notification';
import { AdminService } from 'src/app/_services/admin.service';
import {  Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-vendor-notifications',
  templateUrl: './new-vendor-notifications.component.html',
  styleUrls: ['./new-vendor-notifications.component.scss']
})
export class NewVendorNotificationsComponent {
  NotificationList:INotification[]=[
    {Id:"1",
    VendorName:'Mahmoud',
    Gender:'Male',
    Email:'jhsjdsd',
    PhoneNumber:'2132',
    StoreName:'hellostore',
    StoreCity:'adssadasdd',
    StoreCountry:'asdasdasdd',
    StoreDescription:'asddadsads',
    StoreStreet:'asdadasdasdad',
    Image:[]},
    {Id:"2",
    VendorName:'Mahmoud',
    Gender:'Male',
    Email:'jhsjdsd',
    PhoneNumber:'2132',
    StoreName:'hellostore',
    StoreCity:'adssadasdd',
    StoreCountry:'asdasdasdd',
    StoreDescription:'asddadsads',
    StoreStreet:'asdadasdasdad',
    Image:[]}];

    NotificationId:any;
    errorMessage: any;

    constructor(private activatedRoute:ActivatedRoute,
      private NotificationService:AdminService,
      private router:Router) {}

    ngOnInit(): void {
      this.getnotifications();
  }

    getnotifications(){
      this.NotificationService.GetNotifications().subscribe({
        next:list=> this.NotificationList=list,
        error:error=>this.errorMessage=error
      })
      const confirmedId = this.router.getCurrentNavigation()?.extras?.state?.['confirmedId'];

    if (confirmedId) {
      // Remove the related card from the notifications array
      this.NotificationList = this.NotificationList.filter(n => n.Id !== confirmedId);
    }
    }


    GoToConfirmationNotification(Id:any){

      this.router.navigate(['admindashboard/confirmation',Id])
    }
}
