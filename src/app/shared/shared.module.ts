import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SquareDisplayComponent } from './components/square-display/square-display.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { RoundDisplayComponent } from './components/round-display/round-display.component';



@NgModule({
  declarations: [SquareDisplayComponent, ImageDisplayComponent, RoundDisplayComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SquareDisplayComponent,
    ImageDisplayComponent,
    RoundDisplayComponent
  ]
})
export class SharedModule { }