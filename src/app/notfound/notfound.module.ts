import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';



@NgModule({
  declarations: [
    NotfoundComponent,
    ErrorNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotfoundModule { }
