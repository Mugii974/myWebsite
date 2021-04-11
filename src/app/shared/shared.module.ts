import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from './components/particles/particles.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [ParticlesComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ParticlesComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
