import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ScreenRoutingModule } from './screen-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ScreenComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ScreenRoutingModule,
    FontAwesomeModule
  ]
})
export class ScreenModule { }
