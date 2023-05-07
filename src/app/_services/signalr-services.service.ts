import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import * as SignalR from '@aspnet/signalr'
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignalrServicesService {

  hubConnection!: SignalR.HubConnection;
  public renderer!: Renderer2;

  constructor(private http: HttpClient, rendererFactory: RendererFactory2) {

    this.renderer = rendererFactory.createRenderer(null, null);
  }



  StartCommentConnection() {
    this.hubConnection = new SignalR.HubConnectionBuilder().withUrl('http://localhost:5244/comment',
      {
        skipNegotiation: true,
        transport: SignalR.HttpTransportType.WebSockets
      }).configureLogging(SignalR.LogLevel.Debug).build();

    this.hubConnection.start().then(() => {
      console.log("Hello Connection")
    }).catch(err => console.log(err))
  }

  async addComment(userId: string, comment: string, productID: number) {
    const self = this;
    this.hubConnection.invoke("SendMessage", userId, comment, productID);
    this.hubConnection.on("ReceiveMessage", function (userId, message, productID) {
      var comment = document.getElementById("newreview");
       const div: HTMLElement = self.renderer.createElement("div");
      let image= localStorage.getItem('userimage')
      div.innerHTML = `
    
          <div class="d-flex flex-start w-100"  ">
            <img class="rounded-circle shadow-1-strong  m-1"
              src=${image} alt="avatar" width="40"
              height="40" />
            <div class="form-outline w-100">
  
              <label class="form-control" for="textAreaExample" rows="2"   style="background: #fff;">${message}</label>
            </div>
          </div>
       
   `;
      comment?.appendChild(div);
    });
  }

  public getAllReviews(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5244/comment');
  }
}
