import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SquareDisplayComponent } from './components/square-display/square-display.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';



@NgModule({
  declarations: [SquareDisplayComponent, ImageDisplayComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SquareDisplayComponent,
    ImageDisplayComponent
  ]
})
export class SharedModule { }