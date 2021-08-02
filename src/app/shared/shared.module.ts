import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SquareDisplayComponent } from './components/square-display/square-display.component';



@NgModule({
  declarations: [SquareDisplayComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SquareDisplayComponent
  ]
})
export class SharedModule { }