import { Component } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import {  Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  Notification:any={Id:"1",
  VendorName:'Mahmoud',
  Gender:'Male',
  Email:'jhsjdsd',
  PhoneNumber:'2132',
  StoreName:'hellostore',
  StoreCity:'adssadasdd',
  StoreCountry:'asdasdasdd',
  StoreDescription:'asddadsads',
  StoreStreet:'asdadasdasdad',
  Image:[]};
  NotificationId: any='1';

  constructor(private NotificationService:AdminService,private activatedRoute:ActivatedRoute,private router : Router) {}
  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    //   this.NotificationId=params.get("id");
    //  })

     this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.NotificationId = id;
      this.Notification = this.NotificationService.GetNotification(id);
    });
  }

  // GetNotification(){
  //   this.Notification=this.NotificationService.GetNotification(this.NotificationId);
  // }

  CinfirmVendor(){
    const confirmation = confirm('Are you sure you want to confirm this notification?');
    // If the user confirms, call the NotificationService method to confirm the notification
    if (confirmation) {
      this.NotificationService.Confirmation(this.NotificationId);
      alert('Notification confirmed!');
      this.router.navigate(['admindashboard/notification'], { state: { confirmedId: this.NotificationId }});
    }

  }
}
